import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getSpecificLaunchPad } from "./api"
import { useParams } from "react-router-dom"
import Dashboard from ".."
import pallete from "../../common/colors"
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import NotificationSnackbar from "../../common/snackbar"

const LaunchPadView = () => {
  const { launchPadId } = useParams()
  const [rocket, setRocket] = useState<{ [key: string]: any }>({})
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string }>({ open: false, message: '' })

  useEffect(() => {
    let hasUnMounted = false
    getSpecificLaunchPad(hasUnMounted, launchPadId, setRocket, setSnackbar)
    return (() => {
      hasUnMounted = true
    })
  }, [launchPadId])

  const stack = (label: string, value: string | number) => (
    <Stack direction="row" spacing={5}>
      <Typography sx={{ textDecoration: "underline", textDecorationColor: pallete.secondary }} variant="body1">{`${label}:`}</Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  )

  const body = () => (
    <Box sx={{ p: 2.5, background: pallete.quaternary, borderRadius: "25px 0px" }}>
      <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="primary">{rocket?.name}</Typography>
      </Box>
      <Divider orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: pallete.tertiary, borderColor: pallete.tertiary }} />
      <Box pt={4} pb={2}>
        <Typography pb={2} variant="h6" color="primary">Overview</Typography>
        <Box pl={2}>
          <Typography pb={2} variant="body1">{rocket?.description}</Typography>
          {stack("First Flight", rocket?.first_flight)}
          {stack("Cost Per Launch", rocket?.cost_per_launch)}
          {stack("Success Rate", `${rocket?.success_rate_pct}%`)}
          {stack("Height", `${rocket.height?.meters} meter | ${rocket.height?.feet} feet`)}
          {stack("Diameter", `${rocket?.diameter?.meters} meter | ${rocket?.diameter?.feet} feet`)}
          {stack("Booesters", rocket?.boosters)}
          <Typography pt={2} variant="body1">
            Checkout this wikipedia link for more information about this rocket.
          </Typography>
          <Link href={rocket?.wikipedia as string} target="_blank" variant="body2">{rocket?.wikipedia}</Link>
        </Box>
        <Typography py={2} variant="h6" color="primary">Engines</Typography>
        <Box pl={2}>
          {stack("Type", rocket?.engines?.type)}
          {stack("Version", rocket?.engines?.version)}
          {stack("Layout", rocket?.engines?.layout)}
          {stack("Propellant 1", rocket?.engines?.propellant_1)}
          {stack("Propellant 2", rocket?.engines?.propellant_2)}
          {stack("Thrust to weight ratio", rocket?.engines?.thrust_to_weight)}
        </Box>
        <Typography py={2} variant="h6" color="primary">Image List</Typography>
        <Box pl={2}>
          <ImageList sx={{ mt: 2, width: "100%", height: "100%" }} cols={3} rowHeight={300}>
            {rocket.flickr_images && rocket.flickr_images.map((item: string) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  alt={"Rocket"}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      {snackbar.open && <NotificationSnackbar open={snackbar.open} close={() => setSnackbar({ ...snackbar, open: false, message: '' })} message={snackbar.message} />}
    </Box>
  )

  return <Dashboard body={body()} />
}

export default LaunchPadView
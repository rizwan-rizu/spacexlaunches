import { Box, Divider, Stack, Typography } from "@mui/material"
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
  const [launchPad, setLaunchPad] = useState<{ [key: string]: any }>({})
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string }>({ open: false, message: '' })

  useEffect(() => {
    let hasUnMounted = false
    getSpecificLaunchPad(hasUnMounted, launchPadId, setLaunchPad, setSnackbar)
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
        <Typography variant="h6" color="primary">{launchPad?.name}</Typography>
      </Box>
      <Divider orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: pallete.tertiary, borderColor: pallete.tertiary }} />
      <Box pt={4} pb={2}>
        <Typography pb={2} variant="h6" color="primary">Overview</Typography>
        <Box pl={2}>
          <Typography pb={2} variant="body1">{launchPad?.details}</Typography>
          {stack("Full Name", launchPad?.full_name)}
          {stack("Region", launchPad?.region)}
          {stack("Launch Attempts", launchPad?.launch_attempts)}
          {stack("Launch Successes", launchPad?.launch_successes)}
          {stack("LatLong", `${launchPad?.latitude} | ${launchPad?.longitude}`)}
          {stack("Status", launchPad?.status)}
        </Box>
        <Typography py={2} variant="h6" color="primary">Image List</Typography>
        <Box pl={2}>
          <ImageList sx={{ mt: 2, width: "100%", height: "100%" }} cols={3} rowHeight={300}>
            {launchPad?.images?.large.length > 0 && launchPad?.images?.large.map((item: string) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  alt={"LaunchPad"}
                  loading="eager"
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
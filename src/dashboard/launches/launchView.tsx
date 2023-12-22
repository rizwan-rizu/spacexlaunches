import { Box, CircularProgress, Divider, IconButton, Link, Stack, Tooltip, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { getSpecificLaunch } from "./api"
import { useNavigate, useParams } from "react-router-dom"
import { StoreContext } from "../../store"
import { iRocketsProps } from "../rockets/interface"
import { iLaunchPadProps } from "../launchPads/interface"
import { FlexContainer } from "../../common/styledComponents"
import { ArrowBack } from "@mui/icons-material"
import Dashboard from ".."
import pallete from "../../common/colors"
import NotificationSnackbar from "../../common/snackbar"
import moment from "moment"
import VideoFrame from "../../common/videoFrame"

const LaunchView = () => {
  const { launchId } = useParams()
  const navigate = useNavigate()
  const { rocket: { rockets }, launchPad: { launchPads } } = useContext(StoreContext)
  const [launch, setLaunch] = useState<{ [key: string]: any }>({})
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string }>({ open: false, message: '' })

  useEffect(() => {
    let hasUnMounted = false
    getSpecificLaunch(hasUnMounted, launchId, setLaunch, setSnackbar)
    return (() => {
      hasUnMounted = true
    })
  }, [launchId])

  const stack = (label: string, value: string | number, link?: string) => (
    <Stack direction="row" spacing={5}>
      <Typography sx={{ textDecoration: "underline", textDecorationColor: pallete.secondary }} variant="body1">{`${label}:`}</Typography>
      {
        link
          ? <Link sx={{ cursor: "pointer" }} variant="body2" onClick={() => navigate(link)}>{value}</Link>
          : <Typography variant="body1">{value}</Typography>
      }
    </Stack >
  )

  const body = () => (
    <Box sx={{ p: 2.5, background: pallete.quaternary, borderRadius: "25px 0px" }}>
      {launch ?
        <>
          <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" color="primary">{launch.name}</Typography>
            <Tooltip title="Go Back"><IconButton size={"medium"} color={"secondary"} onClick={() => navigate("/")}><ArrowBack /></IconButton></Tooltip>
          </Box>
          <Divider orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: pallete.tertiary, borderColor: pallete.tertiary }} />
          <Box pt={4} pb={2}>
            <Typography pb={2} variant="h6" color="primary">Overview</Typography>
            <Box pl={2}>
              <FlexContainer>
                <Box>
                  {stack("Date", moment(launch?.date_utc).format("DD-MM-YYYY HH:MM a"))}
                  {stack("Flight Number", launch?.flight_number)}
                  {stack("Rocket", rockets.filter((x: iRocketsProps) => x.id === launch?.rocket)[0]?.name, `/rockets/${launch?.rocket}`)}
                  {stack("Launch Pad", launchPads.filter((x: iLaunchPadProps) => x.id === launch?.launchpad)[0]?.full_name, `/launch-pad/${launch?.launchpad}`)}
                  {stack("Status", launch?.success ? "Successful" : launch?.success === null ? "Upcoming" : "Unsuccessful")}
                </Box>
                <Box><img width={"60%"} src={launch?.links?.patch?.small} alt="launch" /></Box>
              </FlexContainer>
              {(launch?.links?.wikipedia || launch?.links?.reddit?.launch) && <>
                <Typography pt={2} variant="body1">
                  Checkout below links for more information about this launch.
                </Typography>
                <Link href={launch?.links?.wikipedia as string} target="_blank" variant="body2">{launch?.links?.wikipedia}</Link><br />
                <Link href={launch?.links?.reddit?.launch as string} target="_blank" variant="body2">{launch?.links?.reddit?.launch}</Link>
              </>
              }
            </Box>
            <Typography py={2} variant="h6" color="primary">Payload</Typography>
            <Typography py={2} variant="h6" color="primary">Launch Video</Typography>
            <Box pl={2}>
              <VideoFrame youtubeId={launch?.links?.youtube_id} />
            </Box>
          </Box>
        </>
        : <Box width={"100%"} textAlign={"center"}><CircularProgress size={35} color="secondary" /></Box>
      }
      {snackbar.open && <NotificationSnackbar open={snackbar.open} close={() => setSnackbar({ ...snackbar, open: false, message: '' })} message={snackbar.message} />}
    </Box>
  )

  return <Dashboard body={body()} />
}

export default LaunchView
import { Avatar, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as LoadingIllustration } from '../../assets/images/loading.svg'
import logo from '../../assets/images/logo.png'
import MuiButton from './button'
import pallete from "./colors"
import { CenteredContainer } from './styledComponents'

const Loading = () => {
  const navigate = useNavigate()

  return (
    <Box height={"100%"} position={"relative"}>
      <Box p={2} display="flex" alignItems="center">
        <Box pr={1}><Avatar variant="rounded" src={logo} style={{ width: 55, height: "100%" }} /></Box>
        <Typography sx={{ letterSpacing: 2, color: pallete.primary }} variant="h6"><b>SpaceX</b> Launches</Typography>
      </Box>
      <CenteredContainer>
        <Box>
          <LoadingIllustration style={{ height: "250px" }} />
          <Box pt={2.5} textAlign={"center"}><Typography variant="h5" style={{ letterSpacing: 2 }}>Loading...</Typography> </Box>
          <Box pt={2.5} display="flex" alignItems="center" justifyContent="center">
            <Box width={200}>
              <MuiButton label="Go Back" variant='outlined' color='secondary' size='large' fullWidth onClick={() => navigate(-1)} />
            </Box>
          </Box>
        </Box>
      </CenteredContainer>
    </Box>
  )
}

export default Loading
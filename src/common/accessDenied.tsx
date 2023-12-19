import { Avatar, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as AccessDeniedIllustration } from '../../assets/images/access-denied.svg'
import logo from '../../assets/images/logo.png'
import MuiButton from './button'
import { CenteredContainer } from './styledComponents';

const AccessDenied = () => {
  const navigate = useNavigate()

  return (
    <Box height={"100%"} position={"relative"}>
      <Box p={2} display="flex" alignItems="center">
        <Box pr={1}><Avatar variant="rounded" src={logo} style={{ width: 55, height: "100%" }} /></Box>
        <Typography sx={{ letterSpacing: 2 }} variant="h6"><b>SpaceX</b> Launches</Typography>
      </Box>
      <CenteredContainer>
        <Box>
          <AccessDeniedIllustration style={{ height: "250px" }} />
          <Box pt={2.5} textAlign={"center"}><Typography variant="h5" style={{ letterSpacing: 2 }}>Access Forbidden!</Typography> </Box>
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

export default AccessDenied
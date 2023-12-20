import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import pallete from "./colors"
import { ReactComponent as NotFoundIllustration } from '../assets/images/not-found.svg'
import MuiButton from './button'
import { CenteredContainer } from './styledComponents'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Box height={"100%"} position={"relative"}>
      <Box p={2} display="flex" alignItems="center">
        <Typography sx={{ letterSpacing: 2, color: pallete.primary }} variant="h6"><b>SpaceX</b> Launches</Typography>
      </Box>
      <CenteredContainer>
        <Box>
          <NotFoundIllustration style={{ height: "250px" }} />
          <Box pt={2.5} textAlign={"center"}><Typography variant="h5" style={{ letterSpacing: 2 }}>Page Not Found!</Typography> </Box>
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

export default NotFound
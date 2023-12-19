import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CenteredContainer = styled(Box)({
  position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"
})
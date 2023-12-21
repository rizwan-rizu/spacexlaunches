import { Box } from '@mui/material'
import { styled } from '@mui/system'

export const CenteredContainer = styled(Box)({
  position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"
})

export const FlexContainer = styled(Box)({
  display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap-reverse"
})
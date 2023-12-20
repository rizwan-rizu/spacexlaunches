import { createTheme } from '@mui/material/styles'
import pallete from "./common/colors"

export const appTheme = createTheme({
  typography: {
    fontFamily: [
      'VarelaRound',
    ].join(','),
  },
  palette: {
    primary: {
      main: pallete.primary,
    },
    secondary: {
      main: pallete.tertiary,
      "100": pallete.secondary
    },
  },
})
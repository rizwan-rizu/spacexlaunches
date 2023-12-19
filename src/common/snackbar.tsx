import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import { Close } from "@mui/icons-material"

interface iComponentProps {
  message: string,
  open: boolean,
  close: Function
}

const NotificationSnackbar = (props: iComponentProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
      open={props.open}
      autoHideDuration={3000}
      onClose={() => props.close(false)}
      message={props.message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={() => props.close(false)}>
          <Close fontSize="small" />
        </IconButton>
      }
    />
  )
}

export default NotificationSnackbar
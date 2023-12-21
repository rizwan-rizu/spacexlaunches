import { apiService } from "../../apiService"
import { iLaunchPadProps } from "./interface"

export const getAllLaunchPads = async (
  hasUnMounted: Boolean,
  setLaunchPad: React.Dispatch<React.SetStateAction<iLaunchPadProps[]>>,
  setSnackbar?: React.Dispatch<React.SetStateAction<{ open: boolean, message: string }>>
) => {
  try {
    const res = await apiService.get(`/launchpads`)
    if (!hasUnMounted) {
      if (res.status === 200) {
        setLaunchPad(res.data)
      }
      else setSnackbar && setSnackbar({ open: true, message: "Failed to fetch launch pad" })
    }
  } catch (error) {
    if (!hasUnMounted) {
      setSnackbar && setSnackbar({ open: true, message: "Failed to fetch launch pad" })
    }
  }
}

export const getSpecificLaunchPad = async (
  hasUnMounted: Boolean,
  launchPadId: string | undefined,
  setLaunchPad: React.Dispatch<React.SetStateAction<iLaunchPadProps>>,
  setSnackbar: React.Dispatch<React.SetStateAction<{ open: boolean, message: string }>>
) => {
  try {
    const res = await apiService.get(`/launchpads/${launchPadId}`)
    if (!hasUnMounted) {
      console.log(res.data)
      if (res.status === 200) setLaunchPad(res.data)
      else setSnackbar({ open: true, message: "Failed to fetch launch pad" })
    }
  } catch (error) {
    if (!hasUnMounted) {
      setSnackbar({ open: true, message: "Failed to fetch launch pad" })
    }
  }
}
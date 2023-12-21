import { apiService } from "../../apiService"
import { iLaunchProps } from "./interface"

export const getAllLaunches = async (
  hasUnMounted: Boolean,
  setLaunch: React.Dispatch<React.SetStateAction<iLaunchProps[]>>,
  setSnackbar?: React.Dispatch<React.SetStateAction<{ open: boolean, message: string }>>
) => {
  try {
    const res = await apiService.get(`/launches/past`)
    if (!hasUnMounted) {
      if (res.status === 200) {
        setLaunch(res.data.reverse())
      }
      else setSnackbar && setSnackbar({ open: true, message: "Failed to fetch launches" })
    }
  } catch (error) {
    if (!hasUnMounted) {
      setSnackbar && setSnackbar({ open: true, message: "Failed to fetch launches" })
    }
  }
}

export const getSpecificLaunch = async (
  hasUnMounted: Boolean,
  launchId: string | undefined,
  setLaunch: React.Dispatch<React.SetStateAction<iLaunchProps>>,
  setSnackbar: React.Dispatch<React.SetStateAction<{ open: boolean, message: string }>>
) => {
  try {
    const res = await apiService.get(`/launches/${launchId}`)
    if (!hasUnMounted) {
      console.log(res.data)
      if (res.status === 200) setLaunch(res.data)
      else setSnackbar({ open: true, message: "Failed to fetch launch" })
    }
  } catch (error) {
    if (!hasUnMounted) {
      setSnackbar({ open: true, message: "Failed to fetch launch" })
    }
  }
}
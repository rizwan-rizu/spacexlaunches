import { apiService } from "../../apiService"
import { iRocketsProps } from "./interface"

export const getAllRockets = async (
  hasUnMounted: Boolean,
  setRockets: React.Dispatch<React.SetStateAction<iRocketsProps[]>>,
  setSnackbar: React.Dispatch<React.SetStateAction<{ open: boolean, message: string }>>
) => {
  try {
    const res = await apiService.get(`/rockets`)
    if (!hasUnMounted) {
      if (res.status === 200) {
        setRockets(res.data)
      }
      else setSnackbar({ open: true, message: "Failed to fetch rockets" })
    }
  } catch (error) {
    if (!hasUnMounted) {
      setSnackbar({ open: true, message: "Failed to fetch rockets" })
    }
  }
}

export const getSpecificRocket = async (
  hasUnMounted: Boolean,
  rocketId: string | undefined,
  setRocket: React.Dispatch<React.SetStateAction<any>>,
  setSnackbar: React.Dispatch<React.SetStateAction<{ open: boolean, message: string }>>
) => {
  try {
    const res = await apiService.get(`/rockets/${rocketId}`)
    if (!hasUnMounted) {
      console.log(res.data)
      if (res.status === 200) setRocket(res.data)
      else setSnackbar({ open: true, message: "Failed to fetch rocket" })
    }
  } catch (error) {
    if (!hasUnMounted) {
      setSnackbar({ open: true, message: "Failed to fetch rocket" })
    }
  }
}
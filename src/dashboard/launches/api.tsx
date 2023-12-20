import { apiService } from "../../apiService"
import { iRocketsProps } from "./interface"

export const getAllLauches = async (
  hasUnMounted: Boolean,
  setLauches: React.Dispatch<React.SetStateAction<iRocketsProps[]>>,
  setSnackbar?: React.Dispatch<React.SetStateAction<{ open: boolean, message: string }>>
) => {
  try {
    const res = await apiService.get(`/launches/past`)
    if (!hasUnMounted) {
      if (res.status === 200) {
        setLauches(res.data.reverse())
      }
      else setSnackbar && setSnackbar({ open: true, message: "Failed to fetch lauches" })
    }
  } catch (error) {
    if (!hasUnMounted) {
      setSnackbar && setSnackbar({ open: true, message: "Failed to fetch lauches" })
    }
  }
}

export const getSpecificLaucnch = async (
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
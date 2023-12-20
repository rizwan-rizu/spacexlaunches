import { useContext } from "react"
import { styled } from "@mui/system"
import { StoreContext } from "../store"
import { Box } from "@mui/material"
import Topbar from "./template/topbar"
import Sidebar from "./template/sidebar"

const BodyContainer = styled(Box)<{ toggle: boolean }>(({ toggle }) => ({
  padding: `115px 25px 40px ${toggle ? '260px' : '85px'}`,
  transition: "0.7s ease all",
}))

const Dashboard = (props: any) => {
  const { sidebar } = useContext(StoreContext)
  return (
    <>
      <Topbar />
      <Sidebar />
      <BodyContainer toggle={sidebar.toggle}>
        {props.body}
      </BodyContainer>
    </>
  )
}

export default Dashboard

import { useContext } from "react"
import { styled } from "@mui/system"
import { StoreContext } from "../store"
import { Box } from "@mui/material"
import Topbar from "./template/topbar"
import Sidebar from "./template/sidebar"

const BodyContainer = styled(Box)<{ toggle: boolean, layout: string }>(({ toggle, layout }) => ({
  padding: `115px 25px 40px ${layout === 'withTopNav' ? '25px' : toggle ? '260px' : '85px'}`,
  transition: "0.7s ease all",
}))

const Dashboard = (props: any) => {
  const { sidebar, app } = useContext(StoreContext)
  return (
    <>
      <Topbar />
      {app.layout === "withSideNav" && <Sidebar />}
      <BodyContainer toggle={sidebar.toggle} layout={app.layout}>
        {props.body}
      </BodyContainer >
    </>
  )
}

export default Dashboard

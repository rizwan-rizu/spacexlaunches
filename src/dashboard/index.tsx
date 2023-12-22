import { useContext } from "react"
import { styled } from "@mui/system"
import { StoreContext } from "../store"
import { Box, useMediaQuery, useTheme } from "@mui/material"
import Topbar from "./template/topbar"
import Sidebar from "./template/sidebar"

const BodyContainer = styled(Box)<{ toggle: boolean, layout: string }>(({ theme, toggle, layout }) => ({
  padding: `115px 25px 40px`,
  [theme.breakpoints.down('md')]: {
    paddingLeft: `${layout === 'withTopNav' ? '25px' : '85px'}`
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: `${layout === 'withTopNav' ? '25px' : toggle ? '260px' : '85px'}`
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: `25px`
  },
  transition: "0.7s ease all",
}))

const Dashboard = (props: any) => {
  const theme = useTheme()
  const sm_up = useMediaQuery(theme.breakpoints.up('sm'))
  const { sidebar, app } = useContext(StoreContext)
  return (
    <>
      <Topbar />
      {app.layout === "withSideNav" && sm_up && <Sidebar />}
      <BodyContainer toggle={sidebar.toggle} layout={app.layout}>
        {props.body}
      </BodyContainer >
    </>
  )
}

export default Dashboard

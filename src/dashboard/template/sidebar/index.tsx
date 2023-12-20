import { useContext, Fragment } from "react"
import { Box, List, ListItem, Typography, Tooltip, IconButton, ListItemButton } from "@mui/material"
import { AccountCircle, Menu, Dashboard, Rocket } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../../store"
import pallete from "../../../common/colors"
import { styled } from '@mui/system'
import { roles } from "../../../common/helper"

interface iListItemProps {
  name: string
  icon: HTMLElement
  to: string
  routeInitial: string
}

const Sidebar = () => {
  const navigate = useNavigate()
  const { sidebar } = useContext(StoreContext)

  return (
    <SideNav toggle={sidebar.toggle}>
      <Box className="inner">
        <IconButton size="large" sx={{ color: pallete.secondary, mt: 1.5 }} onClick={() => sidebar.setToggle(!sidebar.toggle)}><Menu /></IconButton>
        <List sx={{ mt: 4 }}>
          {sidebarMenuList.map((item: any) =>
            item.visibleTo.some((x: any) => [{ name: 'ALL' }].map((x: any) => x.name)?.includes(x)) &&
            <Fragment key={item.name}>
              {!sidebar.toggle
                ? <Tooltip key={item.name} title={item.name} placement="bottom-start">{renderListItem(item, navigate)}</Tooltip>
                : renderListItem(item, navigate)
              }
            </Fragment>
          )}
        </List>
      </Box>
    </SideNav>
  )
}

const SideNav = styled(Box)<{ toggle: boolean }>(({ toggle }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  boxShadow: `3px 0 6px -3px ${pallete.black}`,
  borderRadius: "0px 40px 13px 0px",
  zIndex: 1,
  backgroundColor: pallete.primary,

  "& .inner": {
    width: toggle ? 224 : 51,
    height: "100%",
    transition: "0.7s ease all",
    margin: "8px",
    overflow: "hidden",

    "& .list-item": {
      backgroundColor: pallete.primary,
      width: "224px",

      "& svg": {
        color: pallete.secondary,
        fontSize: "22px",
      },

      ".Mui-selected": {
        backgroundColor: pallete.tertiary,

        "& p": {
          color: pallete.primary,
        },

        "& svg": {
          color: pallete.white,
        },
      },
    },
  },
}));
const renderListItem = (item: iListItemProps, navigate: any) => (
  <ListItem key={item.name} className="list-item" onClick={() => item.to && navigate(item.to)} disablePadding>
    <ListItemButton selected={window.location.pathname.includes(item.routeInitial)}>
      <>
        {item.icon}
        <Typography sx={{ fontSize: 14, paddingLeft: 3 }} color="secondary.100" variant="body2">{item.name}</Typography>
      </>
    </ListItemButton>
  </ListItem>
)

const sidebarMenuList = [
  { name: 'Dashboard', icon: <Dashboard />, to: '/', routeInitial: "", visibleTo: [roles.ALL] },
  { name: 'Launches', icon: <AccountCircle />, to: '/launches', routeInitial: "launches", visibleTo: [roles.ALL] },
  { name: 'Rockets', icon: <Rocket />, to: '/rockets', routeInitial: "rockets", visibleTo: [roles.ALL] },
]

export default Sidebar

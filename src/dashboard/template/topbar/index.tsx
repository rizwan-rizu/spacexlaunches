import { useContext, useState } from "react"
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Typography } from "@mui/material"
import { styled } from '@mui/system';
import { StoreContext } from "../../../store/"
import { AccountBox, Logout, NotificationsActive, Person, Preview } from "@mui/icons-material"
import pallete from "../../../common/colors"
import { sidebarMenuList } from "../sidebar";
import { useNavigate } from "react-router-dom";
import { setStorageItem } from "../../../utility";

const Topbar = () => {
  const navigate = useNavigate()
  const { sidebar, app } = useContext<any>(StoreContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChangeLayout = () => {
    setStorageItem("layout", app.layout === "withSideNav" ? "withTopNav" : "withSideNav")
    app.setLayout((prev: string) => (prev === "withSideNav" ? "withTopNav" : "withSideNav"))
  }

  return (
    <TopHeader toggle={sidebar.toggle} layout={app.layout}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems={"center"} justifyContent={"flex-start"} spacing={8}>
          <Typography variant="h6" sx={{ color: app.layout === "withTopNav" ? pallete.secondary : pallete.primary }}><b>SpaceX</b> Launches</Typography>
          {app.layout === "withTopNav" && (
            <Stack direction="row" spacing={2}>
              {sidebarMenuList.map((item: any) => (
                <FlexBox key={item.name} isselected={(window.location.pathname === item.to || (window.location.pathname.includes(item.routeInitial) && (item.routeInitial !== "" || window.location.pathname.includes('launch/'))))} layout={app.layout}>
                  {item.icon}
                  <Typography pl={1} variant="body1" onClick={() => navigate(item.to)}>{item.name}</Typography>
                </FlexBox>
              ))}
            </Stack>
          )}
        </Stack>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <IconButton size="large" color="secondary" sx={{ mr: 3 }}><NotificationsActive /></IconButton>
          <Divider sx={{ backgroundColor: app.layout === "withTopNav" ? pallete.secondary : pallete.primary, borderColor: app.layout === "withTopNav" ? pallete.secondary : pallete.primary }} orientation="vertical" variant="middle" flexItem />
          <Box pl={4} display="flex" alignItems="center" justifyContent="space-between" sx={{ cursor: "pointer" }} onClick={(e: any) => setAnchorEl(e.currentTarget)} >
            <Avatar alt="Remy Sharp" />
            <Typography pl={1.5} fontWeight={"bold"} color={app.layout === "withTopNav" ? "secondary.100" : "primary"} variant="body2">John Doe</Typography>
          </Box>
          <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon> <Person fontSize={"small"} /></ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon><AccountBox fontSize={"small"} /></ListItemIcon>
              My account
            </MenuItem>
            <MenuItem onClick={handleChangeLayout}>
              <ListItemIcon><Preview fontSize={"small"} /></ListItemIcon>
              Change Layout
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon><Logout fontSize={"small"} /></ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </TopHeader>
  )
}

const TopHeader = styled(Box)<{ toggle: boolean, layout: string }>(({ toggle, layout }) => ({
  marginRight: 25,
  transition: "0.7s ease all",
  position: "fixed",
  right: 0,
  padding: 25,
  borderRadius: 25,
  zIndex: 2,
  backgroundColor: layout === "withTopNav" ? pallete.primary : pallete.quaternary,
  left: layout === "withTopNav" ? 25 : toggle ? 260 : 85,
}))

const FlexBox = styled(Box)<{ isselected: boolean, layout: string }>(({ isselected, layout }) => {
  return ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "& svg": { fontSize: 18, color: isselected ? pallete.tertiary : layout === "withTopNav" ? pallete.secondary : pallete.primary },
    "& p": { cursor: "pointer", color: isselected ? pallete.tertiary : layout === "withTopNav" ? pallete.secondary : pallete.primary, textDecoration: isselected ? "underline" : " none" },
  })
})

export default Topbar
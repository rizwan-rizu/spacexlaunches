import { useContext, useState } from "react"
import { Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Menu, MenuItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { AccountBox, Logout, NotificationsActive, Person, Preview } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { StoreContext } from "../../../store/"
import { renderListItem, sidebarMenuList } from "../sidebar";
import { useNavigate } from "react-router-dom";
import { setStorageItem } from "../../../utility";
import pallete from "../../../common/colors"

const Topbar = () => {
  const navigate = useNavigate()
  const { sidebar, app } = useContext<any>(StoreContext)
  const theme = useTheme()
  const md_down = useMediaQuery(theme.breakpoints.down('md'))
  const sm_down = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawer, setDrawer] = useState({ left: false, })
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const toggleDrawer = (open: boolean) => () => { setDrawer({ ...drawer, left: open }) }

  const handleChangeLayout = () => {
    setStorageItem("layout", app.layout === "withSideNav" ? "withTopNav" : "withSideNav")
    app.setLayout((prev: string) => (prev === "withSideNav" ? "withTopNav" : "withSideNav"))
  }

  return (
    <TopHeader toggle={sidebar.toggle} layout={app.layout}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems={"center"} justifyContent={"flex-start"} spacing={8}>
          <Typography variant="h6" sx={{ cursor: "pointer", color: app.layout === "withTopNav" ? pallete.secondary : pallete.primary }} onClick={() => navigate('/')}><b>SpaceX</b> Launches</Typography>
          {app.layout === "withTopNav" && (
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
              <Stack direction="row" spacing={2}>
                {sidebarMenuList.map((item: any) => (
                  <FlexBox key={item.name} isselected={(window.location.pathname === item.to || (window.location.pathname.includes(item.routeInitial) && (item.routeInitial !== "" || window.location.pathname.includes('launch/'))))} layout={app.layout}>
                    {item.icon}
                    <Typography pl={1} variant="body1" onClick={() => navigate(item.to)}>{item.name}</Typography>
                  </FlexBox>
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
        {(app.layout === "withTopNav" && md_down) || (app.layout === "withSideNav" && sm_down) ? <Box>
          <IconButton size="medium" color="secondary" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor='left' open={drawer.left} onClose={toggleDrawer(false)}>
            <DrawerContainer>
              <List sx={{ backgroundColor: pallete.primary, mt: 4 }}>
                {sidebarMenuList.map((item: any) =>
                  item.visibleTo.some((x: any) => [{ name: 'ALL' }].map((x: any) => x.name)?.includes(x)) &&
                  renderListItem(item, navigate)
                )}
                <Box py={3}><Divider orientation="horizontal" variant="middle" sx={{ backgroundColor: pallete.tertiary, borderColor: pallete.tertiary }} /></Box>
                <ListItem>
                  <ListItemButton onClick={handleChangeLayout}>
                    <>
                      <Preview />
                      <Typography sx={{ fontSize: 14, paddingLeft: 3 }} color="secondary.100" variant="body2">Change Layout</Typography>
                    </>
                  </ListItemButton>
                </ListItem>
              </List>
            </DrawerContainer>
          </Drawer>
        </Box>
          :
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <IconButton size="large" color="secondary" sx={{ mr: 3 }}><NotificationsActive /></IconButton>
            <Divider sx={{ backgroundColor: app.layout === "withTopNav" ? pallete.secondary : pallete.tertiary, borderColor: app.layout === "withTopNav" ? pallete.secondary : pallete.tertiary }} orientation="vertical" variant="middle" flexItem />
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
        }
      </Box>
    </TopHeader >
  )
}

const TopHeader = styled(Box)<{ toggle: boolean, layout: string }>(({ theme, toggle, layout }) => ({
  marginRight: 25,
  transition: "0.7s ease all",
  position: "fixed",
  right: 0,
  padding: 25,
  borderRadius: 25,
  zIndex: 2,
  backgroundColor: layout === "withTopNav" ? pallete.primary : pallete.quaternary,
  [theme.breakpoints.down('md')]: {
    left: `${layout === 'withTopNav' ? '25px' : '85px'}`
  },
  [theme.breakpoints.up('md')]: {
    left: `${layout === 'withTopNav' ? '25px' : toggle ? '260px' : '85px'}`
  },
  [theme.breakpoints.down('sm')]: {
    left: `25px`
  },
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

const DrawerContainer = styled(Box)(() => ({
  background: pallete.primary,
  height: "100%",
  "& svg": { color: pallete.secondary, fontSize: 17 },
  "& .list-item": {
    "& .Mui-selected": {
      backgroundColor: pallete.tertiary,
      "& p": {
        color: pallete.primary,
      },

      "& svg": {
        color: pallete.white,
      },
    },
  }
}))

export default Topbar
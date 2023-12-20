import { useContext, useState } from "react"
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { styled } from '@mui/system';
import { StoreContext } from "../../../store/"
import { NotificationsActive } from "@mui/icons-material"
import pallete from "../../../common/colors"

const Topbar = () => {
  const { sidebar } = useContext<any>(StoreContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <TopHeader toggle={sidebar.toggle}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: pallete.primary }}><b>SpaceX</b> Launches</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <IconButton size="large" color="secondary" sx={{ mr: 3 }}><NotificationsActive /></IconButton>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box pl={4} display="flex" alignItems="center" justifyContent="space-between" sx={{ cursor: "pointer" }} onClick={(e: any) => setAnchorEl(e.currentTarget)} >
            <Avatar alt="Remy Sharp" />
            <Typography color="primary" sx={{ pl: 1.5, fontWeight: "bold" }} variant="body2">John Doe</Typography>
          </Box>
          <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>My account</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </TopHeader>
  )
}

const TopHeader = styled(Box)<{ toggle: boolean }>(({ toggle }) => ({
  marginRight: 25,
  transition: "0.7s ease all",
  position: "fixed",
  right: 0,
  padding: 25,
  borderRadius: 25,
  zIndex: 2,
  backgroundColor: pallete.quaternary,
  left: toggle ? 260 : 85,
}))

export default Topbar
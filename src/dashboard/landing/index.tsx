import { Link } from "@mui/icons-material"
import { Box, Paper, Typography, Grid, IconButton } from "@mui/material"
import Dashboard from "../index"
import pallete from "../../common/colors"

const Landing = () => {

  const body = () => (
    <Box sx={{ height: "100%", p: 2.5, background: pallete.white, borderRadius: "25px 0px" }}>
      <Grid container spacing={2}>
        {cards.map((item: any) => (
          <Grid key={item.label} item md={3}>
            <Paper elevation={2} sx={{ p: 2, background: `linear-gradient(45deg, ${pallete.quaternary} 20%, ${pallete.primary} 100%)` }}>
              <Typography color="primary" variant="body2">{item.label}</Typography>
              <Typography sx={{ pt: 0.5, fontWeight: 600 }} color="primary" variant="h5">{item.value}</Typography>
              <Box textAlign="right">
                <IconButton size="large" sx={{ color: pallete.secondary }}><Link /></IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )

  return <Dashboard body={body()} />
}

export default Landing

const cards = [
  { label: "Total Bookings", value: "20" },
  { label: "Total Vehicle", value: "700" },
  { label: "Total Employee", value: "100" },
  { label: "Total Firms", value: "150" },
  { label: "Total Expense", value: "200000" },
  { label: "Monthly Bookings", value: "200" },
  { label: "Daily Bookings", value: "900" },
]

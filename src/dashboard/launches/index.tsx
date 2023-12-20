import { Box, Typography, Divider, Card, CardActionArea, CardMedia, CardContent, Button, CardActions, Grid } from "@mui/material"
import Dashboard from "../index"
import pallete from "../../common/colors"
import Table from "../../common/materialTable"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { getAllLauches } from "./api"
import NotificationSnackbar from "../../common/snackbar"
import { tableColumns } from "./tableColumns"
import { StoreContext } from "../../store"

const Launches = () => {
  const navigate = useNavigate()
  const { rocket, launch } = useContext(StoreContext)
  // const [launches, setLaunches] = useState<any[]>([])
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string }>({ open: false, message: '' })

  // useEffect(() => {
  //   let hasUnMounted = false
  //   getAllLauches(hasUnMounted, setLaunches, setSnackbar)
  //   return (() => {
  //     hasUnMounted = true
  //   })
  // }, [])

  console.log(launch)

  const body = () => (
    <Box sx={{ p: 2.5, background: pallete.quaternary, borderRadius: "25px 0px" }}>
      <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="primary">Launches</Typography>
      </Box>
      <Divider orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: pallete.tertiary, borderColor: pallete.tertiary }} />
      <Box pt={4} pb={2}>
        <Typography pb={1} variant="h6" color="primary">Past Launches</Typography>
        {/* <Grid container spacing={2}> */}
        {/* {launches.map(item => (
            <Grid key={item.label} item md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200px"
                    width="200px"
                    image={item.links.patch.small}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant="contained" color="secondary">Share</Button>
                </CardActions>
              </Card>
            </Grid>
          ))} */}
        <Table
          rows={launch.launches}
          checkboxSelection={false}
          columns={tableColumns(navigate, rocket.rockets)}
          pageSize={10}
          height={700}
          getRowId={(row: any) => row.id}
        />
        {/* </Grid> */}
      </Box>
      {snackbar.open && <NotificationSnackbar open={snackbar.open} close={() => setSnackbar({ ...snackbar, open: false, message: '' })} message={snackbar.message} />}
    </Box>
  )

  return <Dashboard body={body()} />
}

export default Launches

// const cards = [
//   { label: "Total Bookings", value: "20" },
//   { label: "Total Vehicle", value: "700" },
//   { label: "Total Employee", value: "100" },
//   { label: "Total Firms", value: "150" },
//   { label: "Total Expense", value: "200000" },
//   { label: "Monthly Bookings", value: "200" },
//   { label: "Daily Bookings", value: "900" },
// ]

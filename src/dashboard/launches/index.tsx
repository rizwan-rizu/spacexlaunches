import { Box, Typography, Divider, Card, CardActionArea, CardMedia, CardContent, Grid, Tooltip, IconButton, CircularProgress } from "@mui/material"
import Dashboard from "../index"
import pallete from "../../common/colors"
import Table from "../../common/materialTable"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import NotificationSnackbar from "../../common/snackbar"
import { tableColumns } from "./tableColumns"
import { StoreContext } from "../../store"
import { iLaunchProps } from "./interface"
import rocket_launch from '../../assets/images/rocket_launch.png'
import moment from "moment"
import { FlexContainer } from "../../common/styledComponents"
import { Cancel, CheckCircle, Square, TableRows, Upcoming } from "@mui/icons-material"
import { getStorageItem, setStorageItem } from "../../utility"

const Launches = () => {
  const navigate = useNavigate()
  const [view, setView] = useState<string>(getStorageItem("launchView") ?? "card")
  const { rocket: { rockets }, launch: { launches }, upcomingLaunch: { upcomingLaunches }, launchPad: { launchPads } } = useContext(StoreContext)
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string }>({ open: false, message: '' })

  const handleViewChange = (value: string) => {
    setView(value)
    setStorageItem("launchView", value)
  }

  const card = (item: iLaunchProps) => (
    <Card sx={{ height: "100%" }}>
      <CardActionArea sx={{ height: "100%" }} onClick={() => navigate(`/launch/${item?.id}`)}>
        <CardMedia
          component="img"
          image={item?.links?.patch?.small ?? rocket_launch}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ fontSize: 17 }} component="div">{item?.name}</Typography>
          <Typography mb={2} variant="body2" color="text.secondary">{moment(item?.date_utc).format('DD-MM-YYYY HH:MM a')}</Typography>
          <FlexContainer>
            <Typography variant="body1" color="text.secondary">{`Flight-${item?.flight_number}`}</Typography>
            {item?.success
              ? <Tooltip title="Successful"><CheckCircle color="secondary" /></Tooltip>
              : item?.success === null
                ? <Tooltip title="Upcoming"><Upcoming color="secondary" /></Tooltip>
                : <Tooltip title="Unsuccessful"><Cancel color="secondary" /></Tooltip>}
          </FlexContainer>
        </CardContent>
      </CardActionArea>
    </Card>
  )

  const body = () => (
    <Box sx={{ p: 2.5, background: pallete.quaternary, borderRadius: "25px 0px" }}>
      <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="primary">Launches</Typography>
        {
          view === "card"
            ? <Tooltip title="Table View"><IconButton size="medium" color="secondary" onClick={() => handleViewChange("table")}><TableRows /></IconButton></Tooltip>
            : <Tooltip title="Card View"><IconButton size="medium" color="secondary" onClick={() => handleViewChange("card")}><Square /></IconButton></Tooltip>
        }

      </Box>
      <Divider orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: pallete.tertiary, borderColor: pallete.tertiary }} />
      <Box pt={4} pb={2}>
        <Typography pb={1} variant="h6" color="primary">Upcoming Launches</Typography>
        {view === "card"
          ? <Grid container direction="row" justifyContent="space-between" alignItems="stretch" spacing={2}>
            {upcomingLaunches.length > 0
              ? upcomingLaunches.map((item: iLaunchProps) => (<Grid key={item.id} item xs={12} sm={6} md={2}>{card(item)}</Grid>))
              : <Box width={"100%"} textAlign={"center"}><CircularProgress size={35} color="secondary" /></Box>
            }
          </Grid>
          : <Table
            rows={upcomingLaunches}
            checkboxSelection={false}
            columns={tableColumns(navigate, rockets, launchPads)}
            pageSize={10}
            height={650}
            getRowId={(row: any) => row.id}
          />
        }
        <Typography py={1} variant="h6" color="primary">Past Launches</Typography>
        {view === "card"
          ? <Grid container direction="row" justifyContent="space-between" alignItems="stretch" spacing={2}>
            {launches.length > 0
              ? launches.map((item: iLaunchProps) => (<Grid key={item.id} item xs={12} sm={6} md={2}>{card(item)}</Grid>))
              : <Box width={"100%"} textAlign={"center"}><CircularProgress size={35} color="secondary" /></Box>
            }
          </Grid>
          : <Table
            rows={launches}
            checkboxSelection={false}
            columns={tableColumns(navigate, rockets, launchPads)}
            pageSize={10}
            height={650}
            getRowId={(row: any) => row.id}
          />
        }
      </Box>
      {snackbar.open && <NotificationSnackbar open={snackbar.open} close={() => setSnackbar({ ...snackbar, open: false, message: '' })} message={snackbar.message} />}
    </Box>
  )

  return <Dashboard body={body()} />
}

export default Launches

import { Box, Divider, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { tableColumns } from "./tableColumns"
import Dashboard from ".."
import pallete from "../../common/colors"
import Table from "../../common/materialTable"
import NotificationSnackbar from "../../common/snackbar"
import { StoreContext } from "../../store"

const LaunchPad = () => {
  const navigate = useNavigate()
  const { launchPad: { launchPads } } = useContext(StoreContext)
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string }>({ open: false, message: '' })

  const body = () => (
    <Box sx={{ p: 2.5, background: pallete.quaternary, borderRadius: "25px 0px" }}>
      <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="primary">Launch Pads</Typography>
      </Box>
      <Divider orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: pallete.tertiary, borderColor: pallete.tertiary }} />
      <Box pt={4} pb={2}>
        <Table
          rows={launchPads}
          checkboxSelection={false}
          columns={tableColumns(navigate)}
          pageSize={10}
          height={600}
          getRowId={(row: any) => row.id}
        />
      </Box>
      {snackbar.open && <NotificationSnackbar open={snackbar.open} close={() => setSnackbar({ ...snackbar, open: false, message: '' })} message={snackbar.message} />}
    </Box>
  )

  return <Dashboard body={body()} />
}

export default LaunchPad
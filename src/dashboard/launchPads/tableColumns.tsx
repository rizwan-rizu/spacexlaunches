import { Visibility } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { capitalizeFirstLetter } from "../../utility";

export const tableColumns = (navigate: any) => ([
  { headerName: 'Name', field: 'full_name', type: "string", width: 300, editable: false },
  { headerName: 'Landing Attempts', field: 'launch_attempts', type: "string", width: 150, editable: false },
  { headerName: 'Landing Success', field: 'launch_successes', type: "string", width: 150, editable: false },
  { headerName: 'Region', field: 'region', type: "string", width: 150, editable: false },
  { headerName: 'Status', field: 'status', type: "string", width: 150, editable: false, renderCell: (data: any) => capitalizeFirstLetter(data.value) },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 200,
    getActions: (params: any) => [
      <GridActionsCellItem
        icon={<Visibility />}
        label="View Rocket"
        onClick={() => navigate(`/launch-pad/${params.row.id}`)}
      />,
    ],
  },
]);
import { Visibility } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid";

export const tableColumns = (navigate: any) => ([
  { headerName: 'Name', field: 'name', type: "string", width: 200, editable: false },
  { headerName: 'Type', field: 'type', type: "string", width: 150, editable: false },
  { headerName: 'Stages', field: 'stages', type: "string", width: 100, editable: false },
  { headerName: 'Boosters', field: 'boosters', type: "string", width: 100, editable: false },
  { headerName: 'First Flight', field: 'first_flight', type: "string", width: 150, editable: false },
  { headerName: 'Cost Per Launch', field: 'cost_per_launch', type: "string", width: 150, editable: false },
  { headerName: 'Success Rate', field: 'success_rate_pct', type: "string", width: 150, editable: false, renderCell: (data: any) => `${data.value}%` },
  { headerName: 'Active', field: 'active', type: "boolean", width: 100, editable: false },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 200,
    getActions: (params: any) => [
      <GridActionsCellItem
        icon={<Visibility />}
        label="View Rocket"
        onClick={() => navigate(`/rockets/${params.row.id}`)}
      />,
    ],
  },
]);
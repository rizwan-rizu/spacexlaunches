import { Visibility } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import moment from 'moment'
import { iRocketsProps } from "./interface";

export const tableColumns = (navigate: any, rocket: iRocketsProps[]) => ([
  { headerName: 'Name', field: 'name', type: "string", width: 250, editable: false },
  { headerName: 'Flight No', field: 'flight_number', type: "string", width: 100, editable: false },
  // { headerName: 'Stages', field: 'stages', type: "string", width: 100, editable: false },
  // { headerName: 'Boosters', field: 'boosters', type: "string", width: 100, editable: false },
  { headerName: 'Rocket', field: 'rocket', type: "string", width: 150, editable: false, renderCell: (data: any) => rocket.filter(x => x.id === data.value)[0].name },
  { headerName: 'Date', field: 'date_utc', type: "string", width: 150, editable: false, renderCell: (data: any) => moment(data.value).format('DD-MM-YYYY HH:MM') },
  { headerName: 'Success', field: 'success', type: "boolean", width: 100, editable: false },
  { headerName: 'Upcoming', field: 'upcoming', type: "boolean", width: 100, editable: false },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 200,
    getActions: (params: any) => [
      <GridActionsCellItem
        icon={<Visibility />}
        label="View Rocket"
        onClick={() => navigate(`/lauches/${params.row.id}`)}
      />,
    ],
  },
]);
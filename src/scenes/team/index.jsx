import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataTeam } from "../../data/Data";

import Header from "../../components/Header";

import { grey } from "@mui/material/colors";

function Team() {
  const [data, setData] = useState(mockDataTeam);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "dateTime",
      headerName: "Timestamp",
      flex: 1,
      cellClassName: "name-column--cell",
      editable: true,
    },
    { field: "category", headerName: "Category", flex: 1, editable: true },
    { field: "title", headerName: "Title", flex: 1, editable: true },
    { field: "currency", headerName: "Currency", flex: 1, editable: true },
    {
      field: "note",
      headerName: "Note",
      flex: 1,
      headerAlign: "left",
      align: "left",
      editable: true,
    },
  ];
  const [arrIds, setArrIds] = useState([]);
  //!    handle delete all
  const handleDeleteAll = () => {
    
    const filteredData = data.filter((row) => !arrIds.includes(row.id));
    const updatedData = filteredData.map((row, index) => ({
      ...row,
      id: index + 1, 
    }));
    setData(updatedData);
    setArrIds([]);
  };

  return (
    <Box m="20px">
      <Header title="TRANSACTION" subtitle="Manage the Transactions" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "greenAccent[300]",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "blueAccent[700]",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "primary[400]",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "blueAccent[700]",
          },
          "& .MuiCheckbox-root": {
            color: "greenAccent[200] !important",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "grey[100]} !important",
          },
        }}
      >
        <button
          onClick={handleDeleteAll}
          style={{ margin: "20px", background: "grey", color: "white" }}
        >
          Delete
        </button>
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
          disableSelectionOnClick
          onRowSelectionModelChange={(ids) => {
            setArrIds(ids);
          }}
        />
      </Box>
    </Box>
  );
}

export default Team;

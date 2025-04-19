import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./Data";
import { Box, Typography, useTheme } from "@mui/material";
import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
  } from "@mui/icons-material";
import Header from "../../Components/Header";

const Team = () => {
    const theme = useTheme()
    const columns = [
        { field: 'id', headerName: 'Id', width: 150, flex: 1, align: "center", headerAlign: "center" },
        { field: 'name', headerName: 'Name', width: 150, flex: 1, align: "center", headerAlign: "center" },
        { field: 'email', headerName: 'Email', width: 150, flex: 1, align: "center", headerAlign: "center" },
        { field: 'age', headerName: 'Age', width: 150, flex: 1, align: "center", headerAlign: "center" },
        { field: 'phone', headerName: 'Phone', width: 150, flex: 1, align: "center", headerAlign: "center" },
        { field: 'access', headerName: 'Access', width: 150, flex: 1, align: "center", headerAlign: "center",
            renderCell:({row:{access}})=>{
                return(
                    <Box sx={{p:"5px",width:"99px",textAlign:"center",borderRadius:"2px", display:"flex",
                                justifyContent:"space-evenly",mt:"10px",ml:"50px",
                                backgroundColor:access==="Admin"?
                                theme.palette.primary.dark
                                :access==="Manager"?theme.palette.secondary.dark:"#3da583",
                    }}>
                        {access==="Admin" && <AdminPanelSettingsOutlined sx={{color:"#fff"}} fontSize="small"/>}
                        {access==="Manager" && <SecurityOutlined sx={{color:"#fff"}} fontSize="small"/>}
                        {access==="User" && <LockOpenOutlined sx={{color:"#fff"}} fontSize="small"/>}
                        <Typography sx={{fontSize:"13px",color:"#fff"}}>{access}</Typography>
                    </Box>
                );
            }
        },
    ];

    return (
        <>
            <Header title={"Our Team"} subtitle={"List of The Team Work"}
                conBtn={undefined} />
            <div style={{ height: 800, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </>
    )
}

export default Team;
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./Data";
import Header from "../../Components/Header";


const Voice = () => {
    return (
        <Stack>
            <Header title={"Invoice"} subtitle={"List of Invoices Balances"}
                conBtn={undefined} />
            <div style={{ height: 800, width: '100%' }}>
                <DataGrid checkboxSelection rows={rows} columns={columns} />
            </div>
        </Stack>
    )
}

export default Voice;
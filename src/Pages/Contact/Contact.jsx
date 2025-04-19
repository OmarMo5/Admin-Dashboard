import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./Data";
import Header from "../../Components/Header";

const Contact = () => {
    return (
        <>
            <Header title={"Our Contact"} subtitle={"List of Contacts for Future reference"}
                conBtn={undefined} />
            <div style={{ height: 800, width: '100%' }}>
                <DataGrid
                    slots={{
                        toolbar:GridToolbar
                    }}
                    rows={rows} columns={columns} />
            </div>
        </>
    )
}

export default Contact;
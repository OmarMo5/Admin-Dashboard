import { Box } from "@mui/material";
import React from "react";
import Geo from "./Geo.jsx";
import Header from "../../Components/Header.jsx";

const Geography = () => {
    return (
        <Box>
            <Header title={"Simple Geography Chart"} subtitle={undefined}
                conBtn={undefined} />
            <Geo />
        </Box>
    )
}

export default Geography;
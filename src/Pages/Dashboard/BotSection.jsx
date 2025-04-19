
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Bar from "../BarChart/Bar.jsx";
import Geo from "../Geography/Geo.jsx";

const ToSection = () => {
    const theme = useTheme();
    return (
        <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
            <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%", }}>
                <Typography
                    color={theme.palette.secondary.main}
                    variant="h6"
                    fontWeight="600"
                    sx={{ padding: "30px 30px 0 30px" }}
                >
                    Sales Quantity
                </Typography>
                <Bar isDashbord={true} />
            </Paper>

            <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
                <Typography
                    color={theme.palette.secondary.main}
                    variant="h6"
                    fontWeight="600"
                    sx={{ padding: "30px 30px 0 30px" }}
                >
                    Geography Based Traffic.
                </Typography>
                <Box mt={"130px"}>
                    <Geo isDashbord={true} />
                </Box>
            </Paper>
        </Stack>
    )
}

export default ToSection;
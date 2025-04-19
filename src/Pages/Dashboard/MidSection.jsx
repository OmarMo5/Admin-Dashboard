import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Bar from "../BarChart/Bar";
import { DownloadingOutlined } from "@mui/icons-material";
import { Transactions } from "./data";


const MidSection = () => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} mt={5} flexWrap={"wrap"} justifyContent={{ xs: "center", sm: "space-between"}}
                 gap={2}>

            <Paper sx={{maxWidth: "900px", flexGrow: 1, padding: "5px 10px" }}>
                <Stack direction={"row"} mt={5} flexWrap={"wrap"} justifyContent={"space-between"}
                    alignContent={"center"}>
                    <Box>
                        <Typography color={theme.palette.secondary.main}
                            mb={1} mt={2} ml={4} variant="h6">
                            Revenue Generator</Typography>
                        <Typography variant="body2" ml={4}>$59,324.32</Typography>
                    </Box>
                    <Box>
                        <IconButton sx={{ mr: 3 }}>
                            <DownloadingOutlined />
                        </IconButton>
                    </Box>
                </Stack>
                <Bar isDashBoard={true} />
            </Paper>

            <Box sx={{minWidth: "250px", height: "450px", flexGrow: 1,overflow:"auto" }}>
                <Paper>
                    <Typography color={theme.palette.secondary.main} p={1.6} fontWeight={"bold"}
                        variant="h6">
                        Recent Transaction
                    </Typography>
                </Paper>
                {Transactions.map((item) => {
                    return (
                        <Paper key={item.txId}
                            sx={{
                                mt: 0.4,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box p={1.2}>
                                <Typography variant="body1">{item.txId}</Typography>
                                <Typography variant="body2">{item.user} </Typography>
                            </Box>
                            <Typography variant="body1">{item.date} </Typography>

                            <Typography
                                borderRadius={1.4}
                                p={1}
                                bgcolor={theme.palette.error.main}
                                color={theme.palette.getContrastText(theme.palette.error.main)}
                                variant="body2"
                            >
                                ${item.cost}
                            </Typography>
                        </Paper>
                    );
                })}
            </Box>

        </Stack>
    )
}

export default MidSection;
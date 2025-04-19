import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({title,subtitle,conBtn}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
                <Typography sx={{ color: theme.palette.info.dark, fontSize: "25px", fontWeight: "bold", textTransform: "uppercase" }}
                    variant="h5">{title}
                </Typography>
                <Typography variant="body1">{subtitle}</Typography>
            </Box>
            <Box sx={{ textAlign: "right" }}>
                <Button sx={{ padding: "6px 8px", textTransform: "capitalize" }} variant="contained" color="primary">
                    <DownloadOutlined />{conBtn}
                </Button>
            </Box>
        </Stack>
    )
}

export default Header;
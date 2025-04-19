import { Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import { EmailOutlined, Person2Outlined, PointOfSaleOutlined, TrafficOutlined } from "@mui/icons-material";

const TopSection = () => {
        const theme = useTheme();
        return (
                <Stack sx={{ pt: "10px", display: "flex", flexWrap: "wrap", }}
                        justifyContent={{ xs: "center", sm: "space-between" }}
                        direction={"row"} gap={2}>
                        <Card icon={<EmailOutlined sx={{ fontSize: "25px", color: theme.palette.secondary.main }} />}
                                title={"12,361"} subTitle={"Email Send"} increr={"+14%"} />
                        <Card icon={<PointOfSaleOutlined sx={{ fontSize: "25px", color: theme.palette.secondary.main }} />}
                                title={"251,125"} subTitle={"Sales Obatined"} increr={"+6%"} />
                        <Card icon={<Person2Outlined sx={{ fontSize: "25px", color: theme.palette.secondary.main }} />}
                                title={"512,222"} subTitle={"New Cliends"} increr={"+21%"} />
                        <Card icon={<TrafficOutlined sx={{ fontSize: "25px", color: theme.palette.secondary.main }} />}
                                title={"258,421"} subTitle={"traffic Recived"} increr={"+12%"} />
                </Stack>
        )
}

export default TopSection;
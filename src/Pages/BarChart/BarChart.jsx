import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Bar from "./Bar.jsx";
import Header from "../../Components/Header.jsx";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title={"Bar Chart"} subtitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
              conBtn={undefined}/>
      <Bar />
    </Box>
  );
};

export default BarChart;
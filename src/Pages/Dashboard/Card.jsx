import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useNavigate } from "react-router-dom";

const data = [
    { year: 2019, Spain: 900, France: 1400, Germany: 1700, },
    { year: 2020, Spain: 1000, France: 1500, Germany: 1800, },
    { year: 2021, Spain: 1100, France: 1600, Germany: 1900, },
    { year: 2022, Spain: 1200, France: 1700, Germany: 2000, },
    { year: 2023, Spain: 1260, France: 1709, Germany: 2080, },
];

const Card = ({ icon, title, subTitle, increr }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <Paper sx={{
            minWidth: "333px", display: "flex", justifyContent: "space-between", p: 1.5,
            flex: "1"
        }}>
            <Stack gap={3}>
                {icon}
                <Typography variant="body2" sx={{ fontSize: "13px" }}>{title}</Typography>
                <Typography variant="body2" sx={{ fontSize: "13px" }}>{subTitle}</Typography>
            </Stack>
            <Stack gap={2} alignItems={"center"}>
                <Box sx={{ height: "80px",width:"180px",cursor:"pointer" }}>
                    <ResponsiveBar
                        data={data}
                        keys={[
                            'Spain',
                            'France',
                            'Germany'
                        ]}
                        indexBy="year" //Horizontal axis
                        theme={
                            {
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                },
                                "axis": {
                                    "domain": {
                                        "line": {
                                            "stroke": theme.palette.divider, //color for axis X,Y
                                            "strokeWidth": 1
                                        }
                                    },
                                    "legend": {
                                        "text": {
                                            "fontSize": 12,
                                            "fill": theme.palette.text.primary,
                                            "outlineWidth": 0,
                                            "outlineColor": "transparent"
                                        }
                                    },
                                    "ticks": {
                                        "line": {
                                            "stroke": theme.palette.divider,
                                            "strokeWidth": 1
                                        },
                                        "text": {
                                            "fontSize": 11,
                                            "fill": theme.palette.text.primary,
                                            "outlineWidth": 0,
                                            "outlineColor": "transparent"
                                        }
                                    }
                                },
                                "grid": {
                                    "line": {
                                        "stroke": theme.palette.divider, //This color for row line
                                        "strokeWidth": 1
                                    }
                                },
                                "legends": {
                                    "title": {
                                        "text": {
                                            "fontSize": 11,
                                            "fill": theme.palette.text.primary,
                                            "outlineWidth": 0,
                                            "outlineColor": "transparent"
                                        }
                                    },
                                    "text": {
                                        "fontSize": 11,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "transparent"
                                    },
                                    "ticks": {
                                        "line": {},
                                        "text": {
                                            "fontSize": 10,
                                            "fill": theme.palette.text.primary,
                                            "outlineWidth": 0,
                                            "outlineColor": "transparent"
                                        }
                                    }
                                },
                                "annotations": {
                                    "text": {
                                        "fontSize": 13,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 2,
                                        "outlineColor": "#ffffff",
                                        "outlineOpacity": 1
                                    },
                                    "link": {
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "outlineWidth": 2,
                                        "outlineColor": "#ffffff",
                                        "outlineOpacity": 1
                                    },
                                    "outline": {
                                        "stroke": "#000000",
                                        "strokeWidth": 2,
                                        "outlineWidth": 2,
                                        "outlineColor": "#ffffff",
                                        "outlineOpacity": 1
                                    },
                                    "symbol": {
                                        "fill": "#000000",
                                        "outlineWidth": 2,
                                        "outlineColor": "#ffffff",
                                        "outlineOpacity": 1
                                    }
                                },
                                "tooltip": {
                                    "wrapper": {},
                                    "container": {
                                        "background": theme.palette.background.default,
                                        "color": theme.palette.text.primary,
                                        "fontSize": 12
                                    },
                                    "basic": {},
                                    "chip": {},
                                    "table": {},
                                    "tableCell": {},
                                    "tableCellValue": {}
                                }
                            }
                        }
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'paired' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            { match: { id: 'fries' }, id: 'dots' },
                            { match: { id: 'sandwich' }, id: 'lines' }
                        ]}
                        borderColor={{
                            from: 'color',
                            modifiers: [['darker', 1.6]]
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Years',
                            legendPosition: 'middle',
                            legendOffset: 40,
                            truncateTickAt: 0
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Salary / Month',
                            legendPosition: 'middle',
                            legendOffset: -55,
                            truncateTickAt: 0
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [['darker', 1.6]]
                        }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    { on: 'hover', style: { itemOpacity: 1 } }
                                ]
                            }
                        ]}
                        role="application"
                        ariaLabel="Nivo bar chart demo"
                        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                    />
                </Box>
                <Typography variant="body2" sx={{ fontSize: "13px" }}>{increr}</Typography>
            </Stack>
        </Paper>
    )
}

export default Card;
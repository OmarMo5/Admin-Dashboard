import React from "react";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { PeopleOutlineOutlined } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import Avatar from '@mui/material/Avatar';
import { Tooltip, Typography } from "@mui/material";

import myImg from "../Assets/my.png";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const array1 = [
    { "text": "Dashboard", "icon": <HomeOutlinedIcon />, "path": "/" },
    { "text": "Manage Team", "icon": <PeopleOutlineOutlined />, "path": "/team" },
    { "text": "Contacts Information", "icon": <ContactsOutlinedIcon />, "path": "/contact" },
    { "text": "Invoices Balances", "icon": <ReceiptOutlinedIcon />, "path": "/voice" },
]
const Array2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
    { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq", },
];
const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
    /* { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" }, */
];

const SideBar = ({ open, handleDrawerClose }) => {
    let location = useLocation()
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <Avatar
                sx={{ mx: "auto", my: "5px", border: "1px solid gray", width: open ? 85 : 25, height: open ? 85 : 25, transition: "0.5s" }}
                alt="Remy Sharp" src={myImg} />
            <Typography align="center"
                sx={{ fontSize: open ? 17 : 0, color: theme.palette.info.main, transition: "0.5s" }}>
                Omar Mokhtar
            </Typography>
            <Typography align="center"
                sx={{ fontSize: open ? 17 : 0, color: "red", transition: "0.5s" }}>
                Admin
            </Typography>

            <Divider />

            <List>
                {array1.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={open?null:item.text} placement="right-end">
                            <ListItemButton onClick={() => {
                                navigate(item.path);
                            }}
                                sx={[{
                                    minHeight: 48, px: 2.5,
                                    bgcolor: location.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[800] : grey[400]
                                        : null
                                },
                                open ? { justifyContent: 'initial', } : { justifyContent: 'center', },]}>
                                <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center', },
                                open ? { mr: 3, } : { mr: 'auto', },]}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text}
                                    sx={[open ? { opacity: 1, } : { opacity: 0, },]} />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                        <Tooltip title={open?null:item.text} placement="right-end">
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={{
                                    minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5,
                                    bgcolor: location.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[800] : grey[400]
                                        : null
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center", }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array3.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                        <Tooltip title={open?null:item.text} placement="right-end">
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={{
                                    minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5,
                                    bgcolor: location.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[800] : grey[400]
                                        : null
                                }}
                            >
                                <ListItemIcon
                                    sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center", }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideBar;
import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import TopBar from './Components/TopBar.jsx';
import SideBar from './Components/SideBar.jsx';

import { ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './theme.jsx';
import { Outlet } from 'react-router-dom';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Upadet the theme only the mode change.
  const [mode, setMode] = React.useState(
    Boolean(localStorage.getItem("currentMode")) ? localStorage.getItem("currentMode") : "dark"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {/* this outlet to make you show page when you click the route to go to this page. */}
          <Outlet />
        </Box>

      </Box>
    </ThemeProvider>
  );
}


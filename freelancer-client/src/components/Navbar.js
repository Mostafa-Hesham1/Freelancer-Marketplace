import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../public/pngaaa.com-220905.png';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'darkblue' }}>
      <Toolbar>
        <Box component="img" src={logo} alt="Logo" sx={{ height: 40, mr: 2 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Freelancer Marketplace
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        {/* ...existing buttons... */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, TextField, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <>
      {/* AppBar Section */}
      <AppBar
        position="static"
        sx={{
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#fff',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
            height: 64,
          }}
        >
          {/* Logo Section */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                padding: '8px',
                borderRadius: '8px',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4b5563' }}>
                LOGO
              </Typography>
            </Box>
          </Link>

         
          {/* Buttons Section */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="text" color="inherit" sx={{ color: 'red' }}>
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#22c55e',
                '&:hover': {
                  backgroundColor: '#16a34a',
                },
              }}
            >
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>


    </>
  );
};

export default Header;

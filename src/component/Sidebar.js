import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FileText, User, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#7FE3E3',
        width: 80,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 3,
        gap: 2,
      }}
    >
      <SidebarIcon icon={<User />} />
      <SidebarIcon icon={<FileText />} />
      <SidebarIcon icon={<Settings />} />
      <Box sx={{ marginTop: 'auto' }}>
        <SidebarIcon icon={<LogOut />} />
      </Box>
    </Box>
  );
};

const SidebarIcon = ({ icon }) => {
  return (
    <IconButton
      sx={{
        padding: 1.5,
        borderRadius: '50%',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

export default Sidebar;

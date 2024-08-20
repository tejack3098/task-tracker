import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../styles/Header.css';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <AppBar position="static" className="transparent-header">
      <Toolbar>
        <Typography variant="h3" className="header-title">
          Task Tracker
        </Typography>
        <Button color="inherit" onClick={onOpenModal} className="header-button">
          Create Task
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

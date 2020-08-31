import React from 'react';

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles, Button } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import BusinessIcon from '@material-ui/icons/Business';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  brandLogo: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobileMenuTrigger: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navBarOffset: theme.mixins.toolbar,
}));

export default function PrimaryAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu-mobile'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button href="#" color="inherit" disableRipple>Iniciar Sesión</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <BusinessIcon className={classes.brandLogo} />
          <Typography variant="h6" noWrap>Juan XXIII</Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button href="#" color="inherit">Iniciar Sesión</Button>
          </div>
          <div className={classes.sectionMobileMenuTrigger}>
            <IconButton
              aria-label="ver más"
              aria-controls='primary-search-account-menu-mobile'
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <div className={classes.navBarOffset}></div>
    </div>
  );
}

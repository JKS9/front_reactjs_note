import {useState} from 'react';
import {NavigateFunction, useNavigate} from 'react-router-dom';

import {Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {AppBar, Drawer, DrawerHeader} from './drawerService';

export const MiniDrawer = (props: any) => {
  const navigate: NavigateFunction = useNavigate();
  const theme: Theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlerRedirectHome = () => {
    navigate('/');
  };

  const handlerRedirectProfile = () => {
    navigate('/user');
  };

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar
        position='fixed'
        open={open}
        color={'default'}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && {display: 'none'}),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{display: 'block'}}
            onClick={handlerRedirectHome}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary={'Home'}
                sx={{opacity: open ? 1 : 0}}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{display: 'block'}}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AddIcon />
              </ListItemIcon>
              <ListItemText
                primary={'Add note'}
                sx={{opacity: open ? 1 : 0}}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{display: 'block'}}
            onClick={handlerRedirectProfile}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText
                primary={'Profile'}
                sx={{opacity: open ? 1 : 0}}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{display: 'block'}}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={props.logout}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary={'Log out'}
                sx={{opacity: open ? 1 : 0}}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component='main'
        sx={{flexGrow: 1, paddingLeft: 2, marginTop: '64px'}}
      >
        {props.children}
      </Box>
    </Box>
  );
};

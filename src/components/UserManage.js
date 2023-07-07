import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function UserManage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:"rgb(243,234,225)", height: "100%" }}>
        <div style={{display:"flex"}}>
            <div style={{ marginLeft:10, maxHeight:25, padding:2, marginTop:5, backgroundColor:"orange"}}></div>
            <Typography style={{display:"flex", justifyContent:"center", fontSize:25, fontWeight:"bold", marginLeft:5}}>Manage Courses</Typography>
        </div>
        <Avatar style={{ display: "flex", justifyContent: "center", margin: "20px auto", width:100, height:100 }} alt="John Doe" src="/static/images/avatar/2.jpg" />
        <Typography  style={{ display:"flex" ,justifyContent:"center"}}>
            John Doe
        </Typography>
        <Typography  style={{ display:"flex" ,justifyContent:"center", color:"orange"}}>
            Admin
        </Typography>
        <List>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/home">
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
                </ListItemButton>
            </ListItem>
          </Link>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <BookmarkBorderOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Course</ListItemText>
                </ListItemButton>
            </ListItem>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/students">
              <ListItem disablePadding>
                  <ListItemButton>
                  <ListItemIcon>
                  <SchoolOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Students</ListItemText>
                  </ListItemButton>
              </ListItem>
            </Link>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <LocalAtmOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Payment</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <AssessmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Report</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <DisplaySettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
                </ListItemButton>
            </ListItem>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/login">
              <ListItem disablePadding>
                  <ListItemButton>
                  <ListItemIcon>
                  <LogoutOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                  </ListItemButton>
              </ListItem>
            </Link>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor:"rgb(243,234,225)"}}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

UserManage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserManage;
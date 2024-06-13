import React, {useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, NavLink} from 'react-router-dom';
import './css/portfolionavbar.css';

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  

  // handle menu click me
  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }

  return (
   <Box>
      <AppBar component={'nav'} sx={{bgcolor: "black"}}>
        <Toolbar>
          <IconButton 
            color='inherit' 
            aria-label='open drawer' 
            edge="start"
            sx={{
                mr:2, 
                display:{sm:'none'},
            }}
            onClick={handleDrawerToggle} 
          >
            <MenuIcon />
          </IconButton>
        
          <Typography 
            color={'goldenrod'} 
            variant='h5' 
            component='div' 
            sx={{
              flexGrow: 1,
              ml: 10,
              "@media (max-width:600px)":{
                ml:0,
              }
            }} 
            
          >
            AKSHAY 
          </Typography>
          
          <Box sx={{display: { xs:'none', sm:'block'} }}>
            <ul className='naviagation-menu'>
              <li>
                <NavLink 
                  className={({ isActive }) => isActive ? 'active' : undefined}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className={({ isActive }) => isActive ? 'active' : undefined}
                  to={"/Projects"}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className={({ isActive }) => isActive ? 'active' : undefined} 
                  to={"/aboutus"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive ? 'active' : undefined}
                  to={"/contactus"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Box component="nav">
        <Drawer variant='temporary' 
          open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{
            display:{xs:'block', sm:"none"}, 
            "& .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"240px",
            } 
          }}
        >
        <Box 
          onClick={handleDrawerToggle} 
          sx={{textAlign:'center'}} 
        >
          <Typography 
            color={'goldenrod'} 
            variant='h5' 
            component='div' 
            sx={{flexGrow:1, my:2}} 
          >
            Akshay
          </Typography>
          <Divider />
          <ul className='mobile-navigation'>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/aboutus"}>About</Link>
            </li>
            <li>
              <Link to={"/contactus"}>Contact</Link>
            </li>
          </ul>
        </Box>
        </Drawer>
      </Box>
      <Box>
        <Toolbar/>
      </Box>
    </Box>
  )
}

export default Navbar;
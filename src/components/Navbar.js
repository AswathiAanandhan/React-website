import React from 'react'
import { makeStyles } from '@mui/styles';
import { AppBar,Box,Button,Toolbar,Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

const useStyles=makeStyles(()=>({

}))
export default function Navbar() {
    const classes=useStyles()

    const navlinks = [
     
        {label:"Gallery",Id:"Gallery"},
        {label:"About",Id:"About"},
        {label:"Contact",Id:"Contact"}
    ]
    return (
        <div>
           <AppBar position='fixed'  sx={{backgroundColor:"black",height:"70px"}}>
              <Toolbar variant='h2' component="h6" style={{display:"flex",flexFlow:"row-wrap",justifyContent:"space-between"}}>
                 <Typography>VISHNU CP</Typography>
                  <Box style={{fontSize:"17px"}} >
                    <Link style={{textDecoration:"none",color:"white",marginRight:"50px"}} to="/">HOME</Link>
                    <Link style={{textDecoration:"none",color:"white",marginRight:"50px"}} to="/gallery">GALLERY</Link>
                    <Link style={{textDecoration:"none",color:"white",marginRight:"50px"}} to="/about">ABOUT</Link>
                    <Link style={{textDecoration:"none",color:"white",marginRight:"50px"}} to="/contact">CONTACT</Link>
                  </Box>
              </Toolbar>
          </AppBar>
           


        </div>
    )
}

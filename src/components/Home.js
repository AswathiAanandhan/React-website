import React from 'react'
import { makeStyles } from '@mui/styles';
import { AppBar,Box,Button,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { height } from '@mui/system';
import Image from '../images/image12.jpg'
import Navbar from './Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Gallery from './Gallery'
import About from "./About";
import Contact from "./Contact";

const useStyles=makeStyles(()=>({
  head:{
      width:'100',
      minHeight:'110vh',
      height:"auto",
      backgroundImage: `url(${Image})`,
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      
    },
    container:{
        width:"100%",
        minHeight:"110vh",
        height:"auto",
        padding:"20px",
        display:"flex",
        flexFlow:"column wrap",
        alignItems:"center",
        justifyContent:"center",
        
    

    },
    headTitle:{
       fontSize:"3rem",
       textAlign:"left",
       

    }
}))
export default function Home() {
    const classes=useStyles()
    return (
        <div>
              
            <Box className={classes.head}>
              
              
                
                <Box  className={classes.container}>
                    
                    <Typography sx={{fontSize:"40px",marginTop:"-300px",color:"black"}} varient="h3" component="h4">BOGTROTTER'S PHOTOGRAPY</Typography>
                    <Typography sx={{fontSize:"18px",color:"white",marginTop:"20px",fontFamily:""}}>"Photography is the story i fail to put into words.It remember little things, long after you have forgotten everything"</Typography>
                                
                </Box>
                
            </Box>
             <Gallery></Gallery>
            <About></About>
            <Contact></Contact>    
            
           
        </div>
    )
}
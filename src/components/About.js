
import { Box, Typography,Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import image from '../images/about1.jpg'

const useStyles=makeStyles(()=>({
    about:{
    backgroundImage:`url(${image})`,
    width:'1300px',
    minHeight:'90vh',
    height:"auto",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    marginLeft:"20px",
    marginTop:"70px"
    }
}))
export default function About() {
    const classes=useStyles()
    return (
        <div>
            <Box className={classes.about}><br/>
                <h1 style={{textAlign:"center",color:"white"}}>ABOUT ME</h1>
                <Grid container>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6} sx={{marginTop:"50px"}}>
                    <Typography style={{color:"white"}}>I am a Thrissur based photographer that takes great pride in capturing the true spirit and personality of the people and subjects that i photograph. My style has been described as creative, fun, engaging and relaxed.
                    I understand that in order for me to capture beautiful images, i must create a relaxed environment. I accomplish this by engaging in conversations, listening with my ears and camera and paying close attention to the smallest of details.</Typography>
                    </Grid>
                </Grid>
              
            </Box>
        </div>
    )
}

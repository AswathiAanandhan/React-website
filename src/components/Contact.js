import React from 'react'
import { Grid,Box, Container, Typography, IconButton, Paper, TextField, Button } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import image from '../images/contactus.jpg'
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles(()=>({
    Box:{
        width:'1300px',
        minHeight:'90vh',
        height:"auto",
        marginLeft:"30px",
        marginTop:"70px",
       backgroundImage:`url(${image})`,
       backgroundSize:"cover",
       backgroundRepeat:"no-repeat",
    },
    paper:{
       height:420,
       width:450,
       marginLeft:"10px"
    },
    content:{
        marginLeft:"40px"
    }
}))
export default function Contact() {
    const classes=useStyles()
    return (
        <div>
            <Box  className={classes.Box}>
                <Grid container>
                    <Grid item >
                       <h1 style={{textAlign:"center",marginLeft:"500px",color:"white"}}>CONTACT ME</h1>
                    </Grid>
                </Grid>
                <Container>

                    <Grid container>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <IconButton size='large' sx={{color:"black",backgroundColor:"white",marginTop:"40px",marginLeft:"70px"}}><LocationOnIcon/></IconButton>
                                 </Grid>
                                 <Grid item xs={6}>
                                     <Typography sx={{marginTop:"40px",marginLeft:"-130px"}}>Address</Typography>
                                     <Typography  sx={{marginTop:"5px",marginLeft:"-130px",color:"white"}}>Cherayil House,<br/>Thrissur</Typography>
                                </Grid>
                                 
                                 <Grid item xs={6}>
                                    <IconButton size='large' sx={{color:"black",backgroundColor:"white",marginTop:"40px",marginLeft:"70px"}}><PhoneIcon/></IconButton>
                                 </Grid>
                                 <Grid item xs={6}>
                                     <Typography  sx={{marginTop:"40px",marginLeft:"-130px"}}>Phone</Typography>
                                      <Typography  sx={{marginTop:"5px",marginLeft:"-130px",color:"white"}}>8606021686</Typography>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <IconButton size='large' sx={{color:"black",backgroundColor:"white",marginLeft:"70px",marginTop:"40px"}}><EmailIcon/></IconButton>
                                 </Grid>
                                 <Grid item xs={6}>
                                     <Typography  sx={{marginTop:"40px",marginLeft:"-130px"}}>Email</Typography>
                                     <Typography  sx={{marginTop:"5px",marginLeft:"-130px",color:"white"}}>vishnu2666@gmail.com</Typography>
                                 </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>

                            <Paper className={classes.paper}><br/>
                                <Box className={classes.content}>
                                <h2>Send Message</h2>
                                <Typography>Full Name</Typography>
                                <TextField fullWidth sx={{width:"350px"}} variant="standard" ></TextField><br/><br/>
                                <Typography>Email</Typography>
                                <TextField  fullWidth sx={{width:"350px"}} variant="standard" ></TextField><br/><br/>
                                <Typography>Type Your Message</Typography>
                                <TextField  fullWidth sx={{width:"350px"}} variant="standard" ></TextField><br/><br/>
                                <Button variant="contained">Send</Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

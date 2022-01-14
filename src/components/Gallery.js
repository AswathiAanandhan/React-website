import React from 'react'
import { Grid, Box, Container } from '@mui/material'
import image1 from '../images/cp1.jpg'
import image2 from '../images/cp2.jpg'
import image3 from '../images/cp3.jpg'
import image4 from '../images/cp4.jpg'
import image5 from '../images/cp5.jpg'
import image6 from '../images/cp6.jpg'
import image7 from '../images/cp7.jpg'
import image8 from '../images/cp8.jpg'
import image9 from '../images/cp9.jpg'
import image10 from '../images/cp10.jpg'
import image11 from '../images/cp11.jpg'
import image12 from '../images/cp12.jpg'
import image13 from '../images/cp13.jpg'
import image14 from '../images/cp14.jpg'
import image15 from '../images/cp15.jpg'
import image16 from '../images/cp16.jpg'
import image17 from '../images/cp17.jpg'
import image18 from '../images/cp18.jpg'
import image19 from '../images/cp19.jpg'
import image20 from '../images/cp20.jpg'
import image21 from '../images/cp21.jpg'
import image22 from '../images/cp22.jpg'
import image23 from '../images/cp23.jpg'
import image24 from '../images/cp24.jpg'




export default function Gallery() {

    const gallery = [
        { url: image1, title: "# gallery", link: "" },
        { url: image2, title: "# gallery", link: "" },
        { url: image3, title: "# gallery", link: "" },
        { url: image4, title: "# gallery", link: "" },
        { url: image5, title: "# gallery", link: "" },
        { url: image6, title: "# gallery", link: "" },
        { url: image7, title: "# gallery", link: "" },
        { url: image8, title: "# gallery", link: "" },
        { url: image9, title: "# gallery", link: "" },
        { url: image10, title: "# gallery", link: "" },
        { url: image11, title: "# gallery", link: "" },
        { url: image12, title: "# gallery", link: "" },
        { url: image13, title: "# gallery", link: "" },
        { url: image14, title: "# gallery", link: "" },
        { url: image15, title: "# gallery", link: "" },
        { url: image16, title: "# gallery", link: "" },
        { url: image17, title: "# gallery", link: "" },
        { url: image18, title: "# gallery", link: "" },
        { url: image19, title: "# gallery", link: "" },
        { url: image20, title: "# gallery", link: "" },
        { url: image21, title: "# gallery", link: "" },
        { url: image22, title: "# gallery", link: "" },
        { url: image23, title: "# gallery", link: "" },
        { url: image24, title: "# gallery", link: "" },
    ]
    return (
        <div>
            <Box>
                <Grid container>
                    <Grid item >
                        <h1 style={{textAlign:"center",marginLeft:"600px"}}>GALLERY</h1>
                    </Grid>
                </Grid>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        {gallery.map((item, i) => (
                             <Grid item xs={4} sm={6} lg={3} key={i} >
                                   <Box>
                                    <img 
                                    src={item.url}
                                    alt={item.title}
                                    style={{marginLeft:"-20px",}}
                                    ></img>
                                    
                                    </Box>
                                </Grid>
                            
                        ))}

                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

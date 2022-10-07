// interface AnnouncementProps {
    
// }
 
// interface AnnouncementState {
    
// }
import React, {Component, Fragment} from 'react'
import { Card, Grid, TextField, Typography} from "@mui/material";
import {Box, spacing} from "@mui/system"

class Announcement extends Component {

    constructor(props: {} | Readonly<{}>){
        super(props)
        this.state = {
            eader:null,
            description:null
        }
    }
    render() { 
        return ( 
            <Fragment>
                <Box sx={{m:5, p:5 }}>
                    <Card sx={{boxShadow:'10px'}}>
                        <Grid
                            container
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                        >
                            <Typography variant="h5" sx={{p:2}}>Annoucement</Typography>
                            <Grid
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                item
                            >
                                <TextField 
                                    id="header"
                                    label="Header"
                                    // value={this.state.Header} 
                                    sx={{m:5, width:'30%'}}
                                    size="small"
                                />     
                            </Grid>   
                            
                            <Grid
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                item
                            >
                                <TextField 
                                    id="description"
                                    label="Description"
                                    // value={this.state.description} 
                                    variant="outlined" 
                                    multiline
                                    rows={5}
                                    sx={{m:5, width:'30%'}}
                                />     
                            </Grid>   
                            
                        </Grid>    
                    </Card>
                </Box>
            </Fragment>
        );
    }
}
 
export default Announcement;
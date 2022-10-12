// interface AnnouncementProps {
    
// }
 
// interface AnnouncementState {
    
// }
import React, {Component, Fragment} from 'react'
import { Button, Card, Grid, TextField, Typography} from "@mui/material";
import {Box, spacing} from "@mui/system"
import SendIcon from '@mui/icons-material/Send';

class Announcement extends Component {

    constructor(props: {} | Readonly<{}>){
        super(props)
        this.state = {
            subject:null,
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
                            display='flex'
                            justifyContent='center'
                        >
                            <Typography 
                                variant="h4" sx={{pt:10}} 
                            >
                                Annoucement
                            </Typography>
                            <Grid
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                item
                                display='flex'
                                justifyContent='center'
                            >
                                <TextField 
                                    id="subject"
                                    label="Subject"
                                    // value={this.state.subject} 
                                    sx={{m:5, width:'40%'}}
                                    size="small"
                                />     
                            </Grid>   
                            
                            <Grid
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                item
                                display='flex'
                                justifyContent='center'
                            >
                                <TextField 
                                    id="bodyText"
                                    label="Body"
                                    // value={this.state.bodyText} 
                                    variant="outlined" 
                                    multiline
                                    rows={5}
                                    sx={{m:5, width:'40%'}}
                                />     
                            </Grid>   
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                sx={{p:5}}
                                display='flex'
                                justifyContent='center'
                            >
                                <Button 
                                    variant="contained"
                                    color="error"
                                    type="submit"
                                    endIcon={<SendIcon />}
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>    
                    </Card>
                </Box>
            </Fragment>
        );
    }
}
 
export default Announcement;
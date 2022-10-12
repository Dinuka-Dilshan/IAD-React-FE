import React, {Component, Fragment} from 'react'
import { Button, Card, Grid, TextField, Typography} from "@mui/material";
import {Box, spacing} from "@mui/system"
import SendIcon from '@mui/icons-material/Send';
import { string } from 'yup';

interface AnnouncementProps {
    
}
 
interface AnnouncementState {
    bodyText: unknown;
    subject: unknown;
    
}
 
class Announcement extends React.Component<AnnouncementProps, AnnouncementState> {
    state: AnnouncementState = {
        subject : 'sdf',
        bodyText: 'sdfsd'  
    }

    handleClick = async (e: React.FormEvent) => {
        e.preventDefault()
        const announcement = {subject:this.state.subject,text:this.state.bodyText, toEmail:'avish.rodrigo11@gmail.com'}
        console.log(announcement)

        await fetch("http://localhost:8080/teacher/announcement",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(announcement)
        }).then(()=>{
            this.setState({subject:''})
            this.setState({bodyText:''})
        })
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
                                // item
                                display='flex'
                                justifyContent='center'
                            >
                                <TextField 
                                    id="subject"
                                    label="Subject"
                                    value={this.state.subject} 
                                    onChange={(e)=>this.setState({subject:e.target.value})}
                                    sx={{m:5, width:'40%'}}
                                    size="small"
                                    />     
                            </Grid>   
                            
                            <Grid
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                // item
                                display='flex'
                                justifyContent='center'
                                >
                                <TextField 
                                    id="bodyText"
                                    label="Body"
                                    value={this.state.bodyText} 
                                    onChange={(e)=>this.setState({bodyText:e.target.value})}
                                    variant="outlined" 
                                    multiline
                                    rows={5}
                                    sx={{m:5, width:'40%'}}
                                />     
                            </Grid>   
                            <Grid
                                // item
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
                                    onClick={this.handleClick}
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
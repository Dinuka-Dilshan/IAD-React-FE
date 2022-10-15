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
    toEmail : Array<String>;
    // receivers: unknown;
}
 
class Announcement extends React.Component<AnnouncementProps, AnnouncementState> {
    state: AnnouncementState = {
        subject : '',
        bodyText: '',
        toEmail:[],
        
    }

    receivers = [
        {
            student_id: "1",
            email: "avish.rodrigo11@gmail.com",
        },
        {
            student_id: "2",
            email: "avishkachathuranga98@gmail.com",
        }
    ];

    email : string [] = []

    handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (this.state.subject !== '' && this.state.bodyText){
            // const announcement = {subject:this.state.subject,text:this.state.bodyText, toEmail:'sajee.thamanga@gmail.com'}
            // this.setState({toEmail:{'avish','sdfds'}})
            // const toEmailed = this.state.receiversemail;
            // this.setState({toEmail:})

            // this.setState({toEmail: this.state.receivers.map(a => a.email)})

            

            // eslint-disable-next-line array-callback-return
            this.receivers.map((data)=>{
                JSON.stringify(data.email);
                this.state.toEmail.push(JSON.stringify(data.email))
                // this.setState({toEmail:JSON.stringify(data.email)})
                
                // this.setState({toEmail:[...this.state.toEmail,JSON.stringify(data.email) ]})
            })
            console.log(this.state.toEmail)
            const announcement = {
                "toEmail" : this.state.toEmail,
                "text" :this.state.bodyText,
                "subject" : this.state.subject
            }
            
    
            await fetch("http://localhost:8080/teacher/announcement",{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(announcement)
            }).then(()=>{
                this.setState({subject:''})
                this.setState({bodyText:''})
                this.setState({toEmail:[]})
            })
        }else{
            alert('Enter subject & emailbody')
        }
    }

    render() { 
        return ( 
            <Fragment>
                <Box sx={{m:5, p:5 }}>
                    <Card sx={{boxShadow:'10px'}}>
                        <form onSubmit={this.handleSubmit}>

                                
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
                                        required
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
                                        required
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
                                    >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>  

                        </form>  
                    </Card>
                </Box>
            </Fragment>
        );
    }
}
 
export default Announcement;
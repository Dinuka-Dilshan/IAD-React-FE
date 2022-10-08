// import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Paper, Typography, Button} from '@mui/material';
import { Container, display } from '@mui/system';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Teacher() {
    
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [email, setEmail] = useState('')
    
    const handleClick = (e) => {
        e.preventDefault()
        const teacher={fName,lName,email}
        // console.log(teacher);

        fetch("http://localhost:8080/teacher/add",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(teacher)
        }).then(()=>{
            setFname('')
            setLname('')
            setEmail('')
            alert('Successfully added information!')
        })
    }
    
    const formStyle = {
        padding: '10px 20px',
        width: '50%',
        margin: '20px',
        // display: 'flex',
        position: 'absolute',
        left: '22%'
    } 

    const inputStyle = {
        width : '90%',
        left: '5%'
    }

    const buttonContainer = {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Paper elevation={3} style={formStyle}>
            <Container style={buttonContainer} sx={{m: 3}}>
                    <Typography variant='h4' sx={{mr: 10}}>Add new teacher</Typography>
                    <Link to="/teachers">
                        <Button 
                            variant='contained'
                            color='secondary'
                        >
                            View all teachers
                        </Button>
                    </Link>
                </Container>    
            <Box
                component="form"
                sx={{
                '& > :not(style)': { mt: 5,  },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="outlined-basic" 
                    label="First Name" 
                    variant="outlined" 
                    style={inputStyle}
                    value={fName}
                    onChange={(e)=>setFname(e.target.value)}
                />
                
                <br />

                <TextField 
                    id="outlined-basic" 
                    label="Last Name" 
                    variant="outlined" 
                    style={inputStyle}
                    value={lName}
                    onChange={(e)=>setLname(e.target.value)}
                    />
                
                <br />

                <TextField 
                    id="outlined-basic" 
                    label="Email Address" 
                    variant="outlined" 
                    style={inputStyle}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                
                <br/>

                <Container style={buttonContainer}>
                    <Button 
                        variant='contained'
                        onClick={handleClick}
                    >
                        Add
                    </Button>
                </Container>

                
            </Box>
        </Paper>
    );
}

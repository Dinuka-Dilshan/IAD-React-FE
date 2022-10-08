import React, {Fragment, useEffect, useState} from 'react'
import {Paper, Typography} from '@mui/material'


const AllTeachers = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/teacher/teachers')
        .then(res => res.json())
        .then((result) => 
            setTeachers(result)
        )
    })

    return ( 
        <Fragment>
            <Paper>
                {teachers.map(teacher => (
                    <Typography key={teacher.id}>
                        First Name : {teacher.fName}
                        &nbsp;&nbsp;&nbsp;
                        Last Name : {teacher.lName}
                        &nbsp;&nbsp;&nbsp;
                        Email : {teacher.email}
                        <br/>
                    </Typography>
                ))}
            </Paper>
        </Fragment>
    );
}
 
export default AllTeachers;
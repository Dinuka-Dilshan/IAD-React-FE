// TODO : Remove axios dependancy
// ? Validate Year

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
// import axios from "axios"; 
import {Form, Col, InputGroup, Row, OverlayTrigger, Popover} from 'react-bootstrap';
// import { Icon } from '@iconify/react';
import { Button, Card, Typography, Grid, TextField } from '@mui/material';
import Done from '@mui/icons-material/Done';
// import { colors, CustButton } from '../../components/Styles';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';


const RegisterStudent = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues :{
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      password: '',
      password1: '',
    },
    validationSchema : yup.object({
      
      firstName: yup.string()
      .matches(/^[A-Za-z]{1,40}$/,"Name can be only consist with letters")
      .min(2, "Name is too short")
      .max(20, "Name is too long!")
      .required("Required!"),
      
      lastName: yup.string()
      .matches(/^[A-Za-z]{1,40}$/,"Name can be only consist with letters")
      .min(2, "Name is too short")
      .max(20, "Name is too long!")
      .required("Required!"),
      
      contactNumber: yup.string()
      .matches(/^[0-9]{1,40}$/,"Invalid contact number")
      .min(9, "Invalid Number")
      .max(9, "invaid Number")
      .required("Required!"),
      
      email: yup.string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email")
      .required("Required!"),
      
      password: yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,"Password is not Strong!")
      .required("Required!"),

      password1: yup.string()
      .oneOf([yup.ref('password'),null], "Password missmatch")
      .required("Required!"),
      
    }),
    onSubmit : values =>{
      const ST_firstName = values.firstName;
      const ST_lastName =values.lastName;
      const ST_contactNumber = values.contactNumber;
      const ST_email = values.email;
      const ST_password = values.password;
      // const ST_password1 = values.password1;

      const newStudent = {
        f_name:ST_firstName,
        l_name:ST_lastName,
        contactNumber:ST_contactNumber,
        email:ST_email,
        password:ST_password,
        // ST_password1,
      }
      console.log(newStudent);
      fetch('http://localhost:8080/student/add',{
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(newStudent)
      }).then(()=>{
        alert(newStudent);
        // console.log(newStudent);
        // navigate('/',{to : '/'});
      })
    },
  });

  // strong password popover
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className='custBgDark'>Strong Password</Popover.Header>
      <Popover.Body className="custBgLight">
      Password must contain <strong>8 to 20 characters</strong> with an <strong>uppercase letter</strong>, a <strong>lowercase</strong> letter, a <strong>special</strong> character & a number
      </Popover.Body>
    </Popover>
  );
  
  return ( 
      <div className="registration mx-5">
        <Card className='p-5 mt-3'>
          <form noValidate onSubmit={formik.handleSubmit}>
          <Typography variant='h3' className='text-center mb-2'>Student Registration</Typography>  
            <Grid container>
              <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  item
                  className="pb-5 ps-5"
                  // display='flex-column'
                  // justifyContent='center'
              >
                  <TextField 
                      id="firstName"
                      label="First Name"
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      // sx={{m:5, width:'40%'}}
                      size="small"
                      required
                  />     
              <div className='invalid-warning text-danger'>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='red'>{formik.errors.firstName}</div>
                  ) : null}
              </div> 
              </Grid>
              <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className="pb-5 ps-5"
                  // item
                  display='flex-column'
                  justifyContent='center'
              >
                  <TextField 
                      id="lastName"
                      label="Last Name"
                      value={formik.values.lastName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      size="small"
                      required
                  />     
                <div className='invalid-warning text-danger'>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className='red'>{formik.errors.lastName}</div>
                    ) : null}
                </div> 
              </Grid>
              {/* <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  item
                  className="pb-5 ps-5"
                  // display='flex-column'
                  // justifyContent='center'
              >
                  <TextField 
                      id="firstName"
                      label="First Name"
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      // sx={{m:5, width:'40%'}}
                      size="small"
                      required
                  />     
              <div className='invalid-warning text-danger'>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='red'>{formik.errors.firstName}</div>
                  ) : null}
              </div> 
              </Grid> */}
              <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  spacing={2}
                  // item
                  className='pb-5 ps-5'
                  display='flex-column'
                  justifyContent='center'
              >
                  <TextField 
                      id="contactNumber"
                      label="Contact Number"
                      value={formik.values.contactNumber}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      size="small"
                      required
                  />     
                <div className='invalid-warning text-danger'>
                    {formik.touched.contactNumber && formik.errors.contactNumber ? (
                      <div className='red'>{formik.errors.contactNumber}</div>
                    ) : null}
                </div> 
              </Grid>
              <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  // item
                  className="pb-5 ps-5"
                  display='flex-column'
                  justifyContent='center'
              >
                  <TextField 
                      id="email"
                      label="Email"
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      size="small"
                      required
                  />     
                <div className='invalid-warning text-danger'>
                    {formik.touched.email && formik.errors.email ? (
                      <div className='red'>{formik.errors.email}</div>
                    ) : null}
                </div> 
              </Grid>
              <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className="pb-5 ps-5"
                  // item
                  display='flex-column'
                  justifyContent='center'
              >
                  <TextField 
                      id="password"
                      type='password'
                      label="Password"
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      size="small"
                      required
                  />     
                <div className='invalid-warning text-danger'>
                    {formik.touched.password && formik.errors.password ? (
                      <div className='red'>{formik.errors.password}</div>
                    ) : null}
                </div> 
              </Grid>
              <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className="pb-5 ps-5"
                  // item
                  display='flex-column'
                  justifyContent='center'
              >
                  <TextField 
                      id="password1"
                      type='password'
                      label="Confirm Password"
                      value={formik.values.password1}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      size="small"
                      required
                  />     
                <div className='invalid-warning text-danger'>
                    {formik.touched.password1 && formik.errors.password1 ? (
                      <div className='red'>{formik.errors.password1}</div>
                    ) : null}
                </div> 
              </Grid>
              
              <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  item
                  className='pt-5'
                  display='flex-column'
                  justifyContent='center'
              >
                <div className="d-flex justify-content-center">
                  <Button variant='contained' type="submit" className='btn-1 text-dark' endIcon={<Done/>}>Register</Button>
                </div> 
              </Grid>
            </Grid>
          </form>
        </Card>              
        {/* <Footer/> */}

        </div>
    );
}

export default RegisterStudent;
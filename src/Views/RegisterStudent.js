// TODO : Remove axios dependancy
// ? Validate Year

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
// import axios from "axios"; 
import {Form, Col, InputGroup, Row, OverlayTrigger, Popover} from 'react-bootstrap';
// import { Icon } from '@iconify/react';
import { Button, Card, Typography } from '@mui/material';
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
      gender: '',
      level: '',
      year: '',
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
      
      gender: yup.string()
      .required("Select your gender!"),

      password: yup.string()
      // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,"Password is not Strong!")
      .required("Required!"),

      password1: yup.string()
      // .oneOf([yup.ref('password'),null], "Password missmatch")
      .required("Required!"),
      
    }),
    onSubmit : values =>{
      const ST_firstName = values.firstName;
      const ST_lastName =values.lastName;
      const ST_contactNumber = values.contactNumber;
      const ST_email = values.email;
      const ST_gender = values.gender;
      const ST_password = values.password;
      // const ST_password1 = values.password1;

      const newStudent = {
        fName:ST_firstName,
        lName:ST_lastName,
        contactNumber:ST_contactNumber,
        email:ST_email,
        gender:ST_gender,
        password:ST_password,
        // ST_password1,
      }
      fetch('localhost:8080/student/add',{
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(newStudent)
      }).then(()=>{
        alert(newStudent);
        // console.log(newStudent);
        navigate('/',{to : '/'});
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
          <Form noValidate onSubmit={formik.handleSubmit}>
          <Typography variant='h3' className='text-center mb-2'>Student Registration</Typography>  
            <Row className="pt-3">
              <Form.Group as={Col} md="6" controlId="validationFormik01" className="mb-3">
                <InputGroup hasValidation>
                  <InputGroup.Text id="firstName" className='input-field '>First Name</InputGroup.Text>
                    <input
                      type="text"
                      name="firstName"
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className='custInput form-control'
                    />
                </InputGroup>
                <div className='invalid-warning text-danger'>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='red'>{formik.errors.firstName}</div>
                  ) : null}

                </div> 
              </Form.Group>
                
              <Form.Group as={Col} md="6" controlId="validationFormik02" className="mb-3">
                <InputGroup hasValidation>
                  <InputGroup.Text id="lastName" className='input-field '>Last Name</InputGroup.Text>
                    <input
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      name="lastName"
                      value={formik.values.lastName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className='custInput form-control'
                    />
                </InputGroup>
                <div className='invalid-warning text-danger'>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className='red'>{formik.errors.lastName}</div>
                  ) : null}
                </div> 
              </Form.Group>            
            </Row>
            
            
            <Row>
              <Form.Group as={Col} md="6" controlId="validationFormik03" className="mb-3">
                <InputGroup hasValidation>
                  <InputGroup.Text id="contactNumber" className='input-field '>Contact Number</InputGroup.Text>
                    <input
                      type="number"
                      aria-describedby="inputGroupPrepend"
                      name="contactNumber"
                      value={formik.values.contactNumber}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className='custInput form-control'
                    />
                  </InputGroup>
                <div className='invalid-warning text-danger'>
                  {formik.touched.contactNumber && formik.errors.contactNumber ? (
                    <div className='red'>{formik.errors.contactNumber}</div>
                  ) : null}
                </div>  
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik04" className="mb-3">
                <InputGroup hasValidation>
                  <InputGroup.Text id="email" className='input-field '>Email</InputGroup.Text>
                    <input
                      type="text"
                      name="email"
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className='custInput form-control'
                    />
                </InputGroup>
                <div className='invalid-warning text-danger'>
                      {formik.touched.email && formik.errors.email ? (
                        <div className='red'>{formik.errors.email}</div>
                      ) : null}
                </div> 
              </Form.Group>
            </Row>
            
            <Row >
              <Form.Group as={Col} md="6" controlId="validationFormik05" className="mb-3">
                <InputGroup hasValidation>
                  <InputGroup.Text id="gender" className='input-field '>Gender</InputGroup.Text>
                    <div className="ps-4 pt-2 radiogender col d-flex justify-content-evenly">
                      <div className="">
                        <Form.Check
                          inline
                          label="Male"
                          name="gender"
                          value="Male"
                          type="radio"
                          id="inline-radio-1"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      <div className="">
                        <Form.Check
                          inline
                          label="Female"
                          name="gender"
                          value="Female"
                          type="radio"
                          id="inline-radio-2"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </div>
                  </InputGroup>
                  <div className='invalid-warning text-danger'>
                      {formik.touched.gender && formik.errors.gender ? (
                        <div className='red'>{formik.errors.gender}</div>
                      ) : null}
                </div> 
              </Form.Group>
            </Row>


            <Row >
              <Form.Group as={Col} md="6" controlId="validationFormik06" className="mb-3">
              <InputGroup hasValidation>
                  <InputGroup.Text id="password" className='input-field '>Password</InputGroup.Text>
                    <input
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className='custInput form-control'
                    />
                  </InputGroup>
                  <div className='invalid-warning text-danger'>
                      {formik.touched.password && formik.errors.password ? (
                        <div className='red'>{formik.errors.password}
                          <OverlayTrigger trigger="click" placement="bottom"  overlay={popover}>
                            <div className='red'>
                              {/* <span><Icon icon="eva:info-outline" color={colors.red} width="20" height="20" />How to create strong Password <strong>Click here</strong></span> */}
                            </div>
                          </OverlayTrigger>
                        </div>
                      ) : null}
                </div> 
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik07" className="mb-3">
              <InputGroup hasValidation>
                  <InputGroup.Text id="password" className='input-field '>Confirm Password</InputGroup.Text>
                    <input
                      type="password"
                      name="password1"
                      value={formik.values.password1}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className='custInput form-control'
                    />
                  </InputGroup>
                  <div className='invalid-warning text-danger'>
                      {formik.touched.password1 && formik.errors.password1 ? (
                        <div className='red'>{formik.errors.password1}</div>
                      ) : null}
                </div> 
              </Form.Group>
            </Row>

            <div className="d-flex justify-content-center">
              <Button variant='contained' type="submit" className='btn-1 text-dark' endIcon={<Done/>}>Register</Button>
            </div>

          </Form>
        </Card>              
        {/* <Footer/> */}

        </div>
    );
}

export default RegisterStudent;
'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import customTheme from '@/lib/theme';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { Typography } from '@mui/material';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const outerTheme = useTheme();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_Comments;

  let handleSubmit = async (formData, resetFormFields) => {
   
    setIsLoading(true);

    try {
      let response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        resetFormFields();
        setIsLoading(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Something went wrong! Please try again later.');
    }
  };
  
  const cardStyle = {
    backgroundColor: '#d1d5db',
    border: 'transparent',
    maxWidth: { xs: '90%', md: '70%' },
    width: { xs: '90%', md: '70%' },
  };

  const textStyle = {
    color: '#030712',
  };

  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-950 min-h-screen p-10  ' >
      <Box display="flex" flexDirection={'column'} justifyContent="center" alignItems="center"  marginBottom='50px'>
        <Card
          variant="outlined"
          sx={cardStyle}
         
        >
          <CardContent>
        <Typography sx={{fontSize: { xs: '25px', md: '30px' }}} color={'#030712'}  marginBottom={'5px'} display='flex' justifyItems='center'>
              Send us a Message
            </Typography>
                  <Typography sx={{fontSize: { xs: '15px', md: '20px' }}} color={'#030712'}  marginBottom={'15px'} display='flex' justifyItems='center'>
              We will be happy to help you
            </Typography>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                message: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm);
              }}
            >
              {({ errors, touched, isValid }) => (
                <Form>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <div>
                      <Field
                        name="firstName"
                        type="text"
                        as={TextField}
                        label="First Name"
                        variant="filled"
                        margin="dense"
                        fullWidth
                        error={touched.firstName && errors.firstName}
                        sx={{ ...textStyle, color: '#030712' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="firstName">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#030712',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex',
                              alignItems: 'left'
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="lastName"
                        type="text"
                        as={TextField}
                        label="Last Name"
                        variant="filled"
                        margin="dense"
                        fullWidth
                        error={touched.lastName && errors.lastName}
                        sx={{ ...textStyle, color: '#030712' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="lastName">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#030712',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left'
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="email"
                        type="text"
                        as={TextField}
                        label="Email"
                        variant="filled"
                        margin="dense"
                        fullWidth
                        error={touched.email && errors.email}
                        sx={{ ...textStyle, color: '#030712' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="email">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#030712',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left'
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="message"
                        type="text"
                        as={TextField}
                        label="Message"
                        multiline
                        variant="filled"
                        margin="dense"
                        fullWidth
                        sx={{ ...textStyle, color: '#030712' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="message">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#030712',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left'
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                  </ThemeProvider>
                  <Button
                    type="submit"
                    sx={{
                      border:'2px solid #030712',
                      color: '#030712',
                      '&:hover': {
                        background: '#030712',
                        color: '#d1d5db',
                      },
                      margintop: '16px',
                      marginBottom:'4px',
                      fontFamily: 'Helvetica, Arial',
                    }}
                    variant="outlined"
                    disabled={!isValid}
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </Button>
                  <Snackbar
                    open={isSuccess}
                    autoHideDuration={6000}
                    onClose={() => setIsSuccess(false)}
                   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  >         
                    <Alert severity="success" 
    sx={{
      backgroundColor: '#030712',  
      color: '#d1d5db', 
      fontFamily: 'Helvetica, Arial',          
      '& .MuiAlert-icon': {
        color: 'green',        
      },
      width: '100%',
    }}
                     onClose={() => setIsSuccess(false)}>
                     Thanks for Contacting!
                    </Alert>
                  </Snackbar>
                  <Snackbar
                    open={isError}
                    autoHideDuration={6000}
                    onClose={() => setIsError(false)}
                   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  >
                      <Alert
    severity="error"
    sx={{
      backgroundColor: '#030712',  
      color: '#d1d5db', 
      fontFamily: 'Helvetica, Arial',           
      '& .MuiAlert-icon': {
        color: 'red',  
      },
      width: '100%',
    }}
    onClose={() => setIsError(false)}
  >
                    There was an issue with your submission. Please try again later.
                    </Alert>
                  </Snackbar>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Contact;

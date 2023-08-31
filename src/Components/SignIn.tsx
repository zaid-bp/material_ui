import { Button, Stack, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, } from 'formik'
import * as yup from 'yup'
import { signin } from '../features/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../features/store';
import { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react';





const validationSchema=yup.object().shape({
    email: yup.string().required('Email is Required'),
    password: yup.string().required('Password is Required')
})
function SignIn() {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedInDet = useSelector((state:RootState)=>state.form);
    const isLoggedIn = loggedInDet.isLoggedIn;
    const userName = loggedInDet.userName

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
    }
    }

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
      ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });



    useEffect(()=>{
        if(isLoggedIn === undefined) {
            setOpen(false)
        } else {
            !isLoggedIn && setOpen(true)
        }
        if(isLoggedIn) {
            navigate(`/dashboard/${userName}`)
            setOpen(false)
        }
    },[isLoggedIn])

    
  return (
    <>
    <Formik 
    initialValues={{
        email:'',
        password:''
    }}
    validationSchema={validationSchema}
    onSubmit={(values)=>{
        dispatch(signin(values));
        
    }}>
        {({values, handleChange, handleBlur, errors, touched})=>(
            <Form style={{width:'100%'}}>
                <Stack spacing={3} sx={{background:'white', boxShadow:3, maxWidth:'35rem', margin:'auto'}} borderRadius={2} padding={3}>

            <Typography variant="h3">
                Sign In
            </Typography>
            <Field
            as={TextField}
            value={values.email}
            label='Email'
            variant='outlined'
            type='email'
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            name='email'
            error={(errors.email && touched.email)?true:false}
            helperText={<ErrorMessage name='email'/>}
            />

            <Field
            as={TextField}
            type='password'
            value={values.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            name='password'
            variant='outlined'
            label='Password'
            error={(errors.password && touched.password)?true:false}
            helperText={<ErrorMessage name='password'/>}

            />

            <Button
            disabled={(values.email && values.password)?false:true} 
            variant='outlined' 
            type='submit'
            >Submit</Button>

                <Stack alignItems='flex-end'>
                    <Typography>New User?</Typography>
                    <Link to='/signup'><Typography marginLeft={'auto'}>SignUp!</Typography></Link>
                </Stack>

            </Stack>
            </Form>


        )}
        

    </Formik>
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Invalid Email or Password!
        </Alert>
      </Snackbar>
    </>
  )
}

export default SignIn




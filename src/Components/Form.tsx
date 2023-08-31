import { TextField, Typography, Stack, Button } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Autocomplete from '@mui/material/Autocomplete';
import { getFormData } from '../features/formSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";


const citiesByProvince: Record<string, string[]> = {
  'Punjab': ['Lahore', 'Faisalabad', 'Rawalpindi'],
  'Sindh': ['Karachi', 'Hyderabad', 'Sukkur'],
  'Khyber Pakhtunkhwa': ['Peshawar', 'Abbottabad', 'Swat'],
  'Gilgit Biltistan': ['Gilgit', 'Skardu', 'Hunza'],
  'Balochistan': ['Quetta', 'Gwadar', 'Turbat'],
  'Jammu & Kashmir': ['Muzaffarabad', 'Mirpur', 'Rawalakot']
}
const states: string[] = Object.keys(citiesByProvince);



const validationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  city: yup.string().required('City is required'),
  selectedProvince: yup.string().required('State is required'),
  email: yup.string().required('email is required'),
  password: yup.string().required('password is required'),
});

const inputStyle = {
  width: '100%',
}

const formStyle = {
  padding: '2rem',
  background: '#ffff',
  margin:'auto',
  width: 'fit-content',
  borderRadius: '1rem',
}

interface Values {
  firstName: string;
  lastName: string;
  city: string;
  selectedProvince: string;
  email: string;
  password: string;
}
function Myform() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        city: 'Hyderabad',
        selectedProvince: 'Sindh',
        email: '',
        password: '',
      }}

      validationSchema={validationSchema}

      onSubmit={(values: Values) => {
          dispatch(getFormData(values))
          navigate('/')
      }}

    >

      {({ errors, values, handleChange, handleBlur, touched, setFieldValue }) => (
        <Form style={formStyle}>

          <Stack>

            <Typography variant='h4' fontWeight={'bold'}>SignUp</Typography>
            <Stack spacing={2} marginTop={2}>
              <Typography variant='h5'>Name</Typography>
              <Stack direction={'row'} spacing={2}>
                <Field
                  id="standard-basic"
                  name='firstName'
                  as={TextField}
                  label="First Name"
                  variant="outlined"
                  helperText={<ErrorMessage name="firstName" />}
                  error={(touched.firstName && errors.firstName) ? true : false}

                />

                <Field
                  id="standard-basic"
                  name='lastName'
                  as={TextField}
                  label="Last Name"
                  variant="outlined"
                  helperText={<ErrorMessage name="lastName" />}
                  error={(touched.lastName && errors.lastName) ? true : false}

                />

              </Stack>

              <Typography variant='h5'>Mail & Pass</Typography>

              <Field
                id="standard-basic"
                name='email'
                as={TextField}
                label="Email"
                style={inputStyle}
                variant="outlined"
                helperText={<ErrorMessage name="email" />}
                error={(touched.email && errors.email) ? true : false}
              />

              <Field
                id="standard-basic"
                name='password'
                type='password'
                as={TextField}
                label="Password"
                style={inputStyle}
                variant="outlined"
                helperText={<ErrorMessage name="password" />}
                error={(touched.password && errors.password) ? true : false}
              />

              <Stack direction={'row'} spacing={2}>

                <Autocomplete
                  value={values.selectedProvince}
                  onChange={(_event, stateVal: (string | any)) => {
                    handleChange('selectedProvince')(stateVal)
                    setFieldValue("city", citiesByProvince[stateVal][0])
                  }}
                  fullWidth
                  onBlur={handleBlur('selectedProvince')}
                  options={states}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select a State"
                      variant="outlined"
                      error={(touched.selectedProvince && errors.selectedProvince) ? true : false}
                      helperText={<ErrorMessage name="selectedProvince" />}
                    />
                  )}
                />

                <Autocomplete
                  value={values.city}
                  onChange={(_event, cityVal: (string | any)) => {
                    handleChange('city')(cityVal)
                  }
                }
                  fullWidth
                  onBlur={handleBlur('city')}
                  options={citiesByProvince[values.selectedProvince]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select a City"
                      variant="outlined"
                      error={(touched.city && errors.city) ? true : false}
                      helperText={<ErrorMessage name="city" />}
                    />
                  )}
                />

              </Stack>

              <Stack alignItems={'center'}>
                <Button variant='contained' type='submit' style={{ width: 'min-content' }}>Submit</Button>
              </Stack>
            </Stack>

            <Stack alignItems='flex-end' marginTop={3}>
                    <Typography variant='body1'>Already have an account?</Typography>
                    <Link to='/'><Typography variant='body2'>Login!</Typography></Link>
            </Stack>




          </Stack>
        </Form>
      )}

    </Formik>

  )
}

export default Myform
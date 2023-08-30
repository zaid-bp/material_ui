import { TextField, Typography, Stack, Button } from '@mui/material';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Autocomplete from '@mui/material/Autocomplete';

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
  addLine2: yup.string().required('addredd is required'),
  addLine1: yup.string().required('addredd is required'),
});

const inputStyle = {
  width: '100%',
}

const formStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  background: '#ffff',
  width: 'fit-content',
  borderRadius: '1rem',
}

interface Values {
  firstName: string;
  lastName: string;
  city: string;
  selectedProvince: string;
  addLine1: string;
  addLine2: string;
}

function Myform() {


  return (

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        city: 'Hyderabad',
        selectedProvince: 'Sindh',
        addLine1: '',
        addLine2: '',
      }}

      validationSchema={validationSchema}

      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>

      ) => {

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}

    >

      {({ errors, values, handleChange, handleBlur, touched }) => (
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

              <Typography variant='h5'>Address</Typography>

              <Field
                id="standard-basic"
                name='addLine1'
                as={TextField}
                label="Streel Line"
                style={inputStyle}
                variant="outlined"
                helperText={<ErrorMessage name="addLine1" />}
                error={(touched.addLine1 && errors.addLine1) ? true : false}
              />

              <Field
                id="standard-basic"
                name='addLine2'
                as={TextField}
                label="Streel Line2"
                style={inputStyle}
                variant="outlined"
                helperText={<ErrorMessage name="addLine2" />}
                error={(touched.addLine2 && errors.addLine2) ? true : false}
              />

              <Stack direction={'row'} spacing={2}>

                <Autocomplete
                  value={values.selectedProvince}
                  onChange={(_event, stateVal: (string | any)) => handleChange('selectedProvince')(stateVal)}
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
                  value={citiesByProvince[values.selectedProvince][0]}
                  onChange={(_event, cityVal: (string | any)) => handleChange('city')(cityVal)}
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




          </Stack>
        </Form>
      )}

    </Formik>

  )
}

export default Myform
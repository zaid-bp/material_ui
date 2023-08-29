import { TextField, Typography, Stack, Button, FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants } from '@mui/material';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Autocomplete from '@mui/material/Autocomplete';
import { JSX } from 'react/jsx-runtime';


const cities = [
'Karachi',
'Lahore',
'Islamabad',
'Faisalabad',
'Rawalpindi',
'Multan',
'Peshawar',
'Quetta',
'Sialkot',
'Gujranwala'
];
const provinces = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Gilgit-Baltistan",
  "Azad Jammu and Kashmir"
];
const validationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  city: yup.string().required('City is required'),
  selectedProvince: yup.string().required('State is required'),
  addLine2: yup.string().required('addredd is required'),
  addLine1: yup.string().required('addredd is required'),  
});

const inputStyle={
  width:'100%',
}

const formStyle={
  justifyContent:'center',
  alignItems:'center',
  padding:'2rem',
  background:'#ffff',
  width:'fit-content',
  borderRadius:'1rem',
}

interface Values {
  firstName: string;
  lastName: string;
  city: string;
  selectedProvince:string;
  addLine1:string;
  addLine2:string;
}

function Myform() {


  return (
    <>
<Formik
        initialValues={{
          firstName: '',
          lastName: '',
          city: '',
          selectedProvince:'',
          addLine1:'',
          addLine2:'',
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

{({ errors, values, handleChange, handleBlur }) => (
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
        error={Boolean(errors.firstName)?true:false}
        
        />
        
        <Field 
        id="standard-basic" 
        name='lastName' 
        as={TextField} 
        label="Last Name" 
        variant="outlined" 
        helperText={<ErrorMessage name="lastName" />}
        error={Boolean(errors.lastName)?true:false}

        
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
      error={Boolean(errors.addLine1)?true:false}

        />
      <Field 
      id="standard-basic" 
      name='addLine2' 
      as={TextField} 
      label="Streel Line2" 
      style={inputStyle} 
      variant="outlined"
      helperText={<ErrorMessage name="addLine2" />}
      error={Boolean(errors.addLine2)?true:false}

      
      />
      
      <Stack direction={'row'} spacing={2}>
        {/* <Field 
          id="standard-basic" 
          as={TextField} 
          name='city' 
          label="City"
          variant="outlined"
          helperText={<ErrorMessage name="city" />}
          error={Boolean(errors.city)?true:false}
        /> */}
          {/* <Field 
          id="standard-basic" 
          as={TextField} 
          name='state' 
          label="State/Province"  
          variant="outlined"
          helperText={<ErrorMessage name="state" />}
          error={Boolean(errors.state)?true:false}
        /> */}
          <Autocomplete
            name="selectedProvince"
            value={values.selectedProvince}
            onChange={(_event, stateVal) => handleChange('selectedProvince')(stateVal)}
            fullWidth
            // onBlur={handleBlur('city')}
            options={provinces}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select a State"
                variant="outlined"
                error={Boolean(errors.selectedProvince)}
                helperText={<ErrorMessage name="selectedProvince" />}
              />
            )}
          />

          <Autocomplete
            name="city"
            value={values.city}
            onChange={(_event, cityVal) => handleChange('city')(cityVal)}
            fullWidth
            // onBlur={handleBlur('city')}
            options={cities}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select a City"
                variant="outlined"
                error={Boolean(errors.city)}
                helperText={<ErrorMessage name="city" />}
              />
            )}
          />





      </Stack>

    <Stack alignItems={'center'}>
      <Button variant='contained' type='submit' style={{width:'min-content'}}>Submit</Button>
    </Stack>
  </Stack>




</Stack>
</Form>
)}

</Formik>
{/* </form> */}
</>
  )
}

export default Myform
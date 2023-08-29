import { TextField, Typography, Stack, Button } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  city: string;
  state:string;
  addLine1:string;
  addLine2:string;
}
function Myform() {
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
  return (
    <>
<Formik
        initialValues={{
          firstName: '',
          lastName: '',
          city: '',
          state:'',
          addLine1:'',
          addLine2:'',
        }}
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
  <Form style={formStyle}>
  <Stack>
  <Typography variant='h4' fontWeight={'bold'}>SignUp</Typography>
  <Stack spacing={2} marginTop={2}>
      <Typography variant='h5'>Name</Typography>
      <Stack direction={'row'} spacing={2}>
        <Field id="standard-basic" name='firstName' as={TextField} label="First Name" variant="outlined" />
        <Field id="standard-basic" name='lastName' as={TextField} label="Last Name"  variant="outlined" />
      </Stack>

      <Typography variant='h5'>Address</Typography>
      
      <Field id="standard-basic" name='addLine1' as={TextField} label="Streel Line" style={inputStyle} variant="outlined" />
      <Field id="standard-basic" name='addLine2' as={TextField} label="Streel Line2" style={inputStyle} variant="outlined" />
      
      <Stack direction={'row'} spacing={2}>
        <Field id="standard-basic" as={TextField} name='city' label="City" variant="outlined" />
        <Field id="standard-basic" as={TextField} name='state' label="State/Province"  variant="outlined" />
      </Stack>

    <Stack alignItems={'center'}>
      <Button variant='contained' type='submit' style={{width:'min-content'}}>Submit</Button>
    </Stack>
  </Stack>




</Stack>
</Form>
</Formik>
{/* </form> */}
</>
  )
}

export default Myform
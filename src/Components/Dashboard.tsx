import { Button, Container, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/formSlice';
import { RootState } from '../features/store';
import { useNavigate, useParams } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const userName = params.username;
  
  const loggedIn = useSelector((state:RootState)=>state.form.isLoggedIn);
  useEffect(()=>{
    if(!loggedIn){
        navigate('/');
    }
  },[])
  return (
    <Stack width={'100vw'} height={'100vh'}>
        <Button 
        variant='contained' 
        sx={{bgcolor:'#000', fontWeight:'bold', width:'min-content'}}
        onClick={()=>{
            navigate('/');
            dispatch(logout());
        }}
        >Logout</Button>
        <Container sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Typography variant='h2'>{`Hello, ${userName}`}</Typography>
        </Container>
    </Stack>
  )
}

export default Dashboard
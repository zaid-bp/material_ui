import Header from './Header'
import ProfitLoss from './ProfitLoss'
import Sales from './Sales'
import Expenses from './Expenses'
import Income from './Income'
import CashInAndOut from './CashInAndOut'
import { Button, Stack, Typography, Grid, Paper } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/formSlice';
import { RootState } from '../features/store';

import { useNavigate } from 'react-router-dom';
import BarGraph from './BarGraph'
import MembersAndJoinee from './MembersAJoinee/MembersAndJoinee'
import PresentMemAStaffAFee from './PresentMemAStaffAFee'
import NewAdd from './NewAdd'
import { newAdd } from './Styles'


function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const params = useParams();
  // const userName = params.username;

  const loggedIn = useSelector((state: RootState) => state.form.isLoggedIn);
  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [])
  return (
    <Stack spacing={6} paddingX={3}>
      <Stack>
        <Header />
      </Stack>

      <Grid container justifyContent={'space-between'} rowGap={4} columns={13}>

        <Grid item xs={12} sm={10} md={6} lg={4}>
          <ProfitLoss />
        </Grid>

        <Grid item xs={12} sm={10} md={6} lg={4}>
          <Sales />
        </Grid>

        <Grid item xs={12} sm={10} md={6} lg={4}>
          <Expenses />
        </Grid>

        <Grid item xs={12} sm={10} md={6} lg={4}>
          <Income />
        </Grid>

        <Grid item xs={12} sm={10} md={6} lg={4}>
          <CashInAndOut />
        </Grid>

        <Grid item sm={4}>
          <Stack width={'-moz-available'}></Stack>
        </Grid>

      </Grid>


      <Grid container columns={51} justifyContent={'space-between'} rowGap={2}>
        <Grid item md={50} lg={25}>
          <Paper elevation={2} sx={{ width: '100%', borderRadius:'10px', paddingY:'2rem'}}>
            <MembersAndJoinee />
          </Paper>
        </Grid>

        <Grid item md={50} lg={25}>
          <BarGraph />
        </Grid>
      </Grid>

      <Stack>
        <PresentMemAStaffAFee/>
      </Stack>

      <Stack textAlign={'center'}>
        <Typography variant="h2" style={newAdd}>
          New Addmissions
        </Typography>
      </Stack>

      <NewAdd/>



      <Stack>
        <Button
          variant='contained'
          sx={{ bgcolor: '#000', fontWeight: 'bold', width: 'min-content', marginX: 'auto' }}
          onClick={() => {
            navigate('/');
            dispatch(logout());
          }}
        >Logout</Button>
      </Stack>


    </Stack>
  )
}

export default Dashboard


import { Divider, Stack, Typography } from '@mui/material'
import logo from '../assets/logo.png';

function Header() {
  const dashboardTxt={
    color: '#463C3C',
    fontFamily: 'Roboto',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
  }

  return (
    <>
    <Stack direction={'row'} paddingY={'15px'} alignItems={'center'} justifyContent={'space-between'}>
      <Typography variant='h2' style={dashboardTxt}>My Dashboard</Typography>
      <img src={logo} alt="Gym Box" />
    </Stack>
    <Divider/>
    </>
  )
}

export default Header
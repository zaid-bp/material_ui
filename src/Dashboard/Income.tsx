import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React from 'react'

import { subTxt, cardHeading, cardStyles } from './Styles';



function Income() {
  let dueThisMonth = '42,000';
  let overDue = '23,000';
  let paidLast30Days = '30,000';
  const [lastMonthVal, setLastMonthVal] = React.useState('');
  // const [incomeProgress, setIncomeProgress] = React.useState(50)
  // const [expensesProgress, setExpensesProgress] = React.useState(10)
  const lastMonth = ['5', '10', '15', '20',];
  const incomeBar = 40;

  const handleChange = (event: SelectChangeEvent) => {
    setLastMonthVal(event.target.value);
  };

  return (
    <Card style={cardStyles}>
      <CardContent>

        <Stack direction={'row'} justifyContent={'space-between'}>

          <Typography style={cardHeading}>Income</Typography>

          <FormControl
            size="small"
          >
            <InputLabel
              id="demo-simple-select-helper-label"
              sx={{ fontSize: '0.875rem', }}
            >Last month</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={lastMonthVal}
              label="Age"
              sx={{
                width: '7.5625rem',

              }}
              onChange={handleChange}
            >
              {
                lastMonth.map((item, index) => {
                  return (<MenuItem
                    key={index}
                    value={item}>{item}</MenuItem>)
                })
              }
            </Select>
          </FormControl>
    {/* <Autocomplete
      id="disabled-options-demo"
      options={lastMonth}

      sx={{ width: 'fit-content', paddingY:'0', marginY:'0' }}
      renderInput={(params) => <TextField {...params} label="Last Month" />}
    /> */}
      
        </Stack>

        <Stack direction={'row'} marginTop={2}>
          
          <Stack bgcolor={'#BBBEC4'} width={'2vw'} justifyContent={'end'} height={'inherit'}>
            <Stack bgcolor={'#92CE3F'} borderTop={'2px solid white'} width={'100%'} height={`${incomeBar}%`}></Stack>
          <Stack >

        </Stack>

          </Stack>

          <Stack spacing={2} marginLeft={4} paddingY={2} display={'flex'} justifyContent={'center'}>
            <Stack>
              <Typography style={subTxt} variant='h5'>Rs. {dueThisMonth}</Typography>
              <Typography variant="h5" style={subTxt}>Due this Month</Typography>
            </Stack>

            <Stack>
              <Typography style={subTxt} variant='h5'>Rs. {overDue}</Typography>
              <Typography variant="h5" style={subTxt}>Over Due</Typography>
            </Stack>

            <Stack>
              <Typography style={subTxt} variant='h5'>Rs. {paidLast30Days}</Typography>
              <Typography variant="h5" style={subTxt}>Paid Last 30 Days</Typography>
            </Stack>

          </Stack>

        </Stack>



      </CardContent>
    </Card>
  )
}

export default Income
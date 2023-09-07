import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React from 'react'
import { yellColorTxt, subTxt, cardHeading, cardStyles } from './Styles';



function ProfitLoss() {
  let netIncome = '26,4500,00';
  let income = '25,0000,00';
  let expenses = '1,4500,00';
  const [lastMonthVal, setLastMonthVal] = React.useState('');
  // const [incomeProgress, setIncomeProgress] = React.useState(50)
  // const [expensesProgress, setExpensesProgress] = React.useState(10)
  const lastMonth = ['5', '10', '15', '20',];

  const handleChange = (event: SelectChangeEvent) => {
    setLastMonthVal(event.target.value);
  };
  const incomeValue = 80;
  const expenseValue = 20;


  return (
    <Card
      style={cardStyles}
    >
      <CardContent>
        <Stack direction={'row'} justifyContent={'space-between'}>

          <Typography style={cardHeading}>
            Profit & Loss
          </Typography>

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
        </Stack>

        <Stack spacing={3} marginTop={1}>
          <Stack>
            <Typography style={yellColorTxt} variant='h2'>Rs. {netIncome}</Typography>
            <Typography variant="h5" style={subTxt}>Net income for last 30 days</Typography>
          </Stack>

          <Stack>

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography style={yellColorTxt} sx={{ width: '-moz-available' }} variant='h2'>Rs. {income}</Typography>

              <Stack bgcolor={'tranaparent'} borderRadius={'20px'} width={'100%'} height={'2vh'}>
                <Stack borderRadius={'20px'} width={`${incomeValue}%`} bgcolor={'#34A853'} height={'100%'}>
                </Stack>
              </Stack>
            </Stack>

            <Typography variant="h5" style={subTxt}>Income</Typography>
          </Stack>


          <Stack>
            <Stack direction={'row'} alignItems={'center'}>
              <Typography style={yellColorTxt} sx={{ width: '-moz-available' }} variant='h2'>Rs. {expenses}</Typography>

              <Stack bgcolor={'transparent'} borderRadius={'20px'} height={'2vh'} width={'100%'}>
                <Stack borderRadius={'20px'} width={`${expenseValue}%`} height={'100%'} bgcolor={'red'}>
                </Stack>
              </Stack>


            </Stack>

            <Typography variant="h5" style={subTxt}>Expenses</Typography>
          </Stack>
        </Stack>




      </CardContent>
    </Card>
  )
}

export default ProfitLoss
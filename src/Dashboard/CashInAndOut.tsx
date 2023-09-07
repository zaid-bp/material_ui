import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import React from "react";
import { cardHeading, cardStyles } from "./Styles";
import CashInOut from "./Graphs/CashInAOut";
function CashInAndOut() {
  const lastMonth = ['5', '10', '15', '20',];
  const [lastMonthVal, setLastMonthVal] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setLastMonthVal(event.target.value);
  };
  const expAIncTxt = {
    fontSize: '12px',
    fontWeight: 'light',
  }
  return (
    <Card style={cardStyles}>
      <CardContent>
        <Stack direction={'row'} justifyContent={'space-between'}>

          <Typography style={cardHeading}>
            Cash In & Cash Out
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

        
        
        <Stack bgcolor={'#FFF8E5'} borderRadius={2} marginY={2} height={'12rem'} width={'100%'} >
          <CashInOut />
        </Stack>



        <Stack direction={'row'} spacing={1} justifyContent={'flex-end'}>
          <Box sx={{ background: "#FCBC1B", width: '1rem', height: '1rem', borderRadius: '0.5rem' }} />
          <Typography color={'#FCBC1B'} style={expAIncTxt} variant="body2">Income</Typography>
          <Box sx={{ background: "#463C3C", width: '1rem', height: '1rem', borderRadius: '0.5rem' }} />
          <Typography color={'#463C3C'} style={expAIncTxt} variant="body2">Expenses</Typography>
        </Stack>

      </CardContent>
    </Card>
  );
}

export default CashInAndOut;

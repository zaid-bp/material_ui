import React from "react";
import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { yellColorTxt, subTxt, cardHeading, cardStyles, subtitleStyle } from './Styles';
import { ExpensesBarG } from "./Graphs/ExpensesBarG";

function Expenses() {
    const [lastMonthVal, setLastMonthVal] = React.useState('');
    const lastMonth = ['5', '10', '15', '20',];
    const expenses = '26,4500,00';
    const DataUpdatedTime = 2;

    const handleChange = (event: SelectChangeEvent) => {
        setLastMonthVal(event.target.value);
    };

    return (
        <Card style={cardStyles}>
            <CardContent>
                <Stack direction={'row'} justifyContent={'space-between'}>

                    <Stack>
                        <Typography style={cardHeading}>Expenses</Typography>
                        <Typography variant="subtitle1" style={subtitleStyle}>{`Data updated ${DataUpdatedTime} minutes ago`}</Typography>
                    </Stack>

                    <FormControl size="small">
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

                <Stack paddingY={1}>
                    <Typography variant="h5" style={subTxt}>Total Sales</Typography>
                    <Typography style={yellColorTxt} variant='h2'>Rs. {expenses}</Typography>
                </Stack>

                <Stack direction={'row'}>
                    <Stack spacing={1} width={'100%'}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                            <Box sx={{height:'1rem', width:'1rem', borderRadius:'0.5rem' ,background:'#398280'}}/>
                            <Stack>
                                <Typography variant="h2" style={cardHeading}>Rs. {expenses}</Typography>
                                <Typography style={subtitleStyle}>Payroll Expenses</Typography>
                            </Stack>
                        </Stack>
                        
                        <Stack direction={'row'} spacing={3} alignItems={'center'}>
                            <Box sx={{height:'1rem', width:'1rem', borderRadius:'0.5rem' ,background:'#4AA3A3'}}/>
                            <Stack>
                                <Typography variant="h2" style={cardHeading}>Rs. {expenses}</Typography>
                                <Typography style={subtitleStyle}>Payroll Expenses</Typography>
                            </Stack>
                        </Stack>

                        <Stack direction={'row'} spacing={3} alignItems={'center'}>
                            <Box sx={{height:'1rem', width:'1rem', borderRadius:'0.5rem' ,background:'#4AA3A3'}}/>
                            <Stack>
                                <Typography variant="h2" style={cardHeading}>Rs. {expenses}</Typography>
                                <Typography style={subtitleStyle}>Payroll Expenses</Typography>
                            </Stack>
                        </Stack>



                    </Stack>
                    <Stack width={'12rem'} sx={{ transform: "translateY(-2rem)" }}>
                        <ExpensesBarG />
                    </Stack>




                </Stack>

            </CardContent>
        </Card>
    );
}


export default Expenses;

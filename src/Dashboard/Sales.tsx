import React from "react";
import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { yellColorTxt, subTxt, cardHeading, cardStyles, subtitleStyle } from './Styles';
import SalesG from "./Graphs/SalesG";
function Sales() {
    const [lastMonthVal, setLastMonthVal] = React.useState('');
    const lastMonth = ['5', '10', '15', '20',];
    const DataUpdatedTime = 'a minute';
    const sales = '85,642';
    const handleChange = (event: SelectChangeEvent) => {
        setLastMonthVal(event.target.value);
    };

    return (
        <Card style={cardStyles}>
            <CardContent>
                <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                    <Stack direction={'column'}>
                        <Typography style={cardHeading}>
                            Sales
                        </Typography>
                        <Typography variant="subtitle1" style={subtitleStyle}>{`Data updated ${DataUpdatedTime} ago`}</Typography>
                    </Stack>

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

                <Stack>
                    <Stack paddingY={1}>
                        <Typography variant="h5" style={subTxt}>Total Sales</Typography>
                        <Typography style={yellColorTxt} variant='h2'>Rs. {sales}</Typography>
                    </Stack>

                    <Stack maxHeight={'10rem'} width={'100%'}>
                        <SalesG/>
                    </Stack>

                </Stack>

            </CardContent>
        </Card>
    );
}

export default Sales;

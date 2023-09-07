import { Box, Paper, Stack } from "@mui/material";
import { useMemo, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Slider from "./Slider";
import { sliderBtn } from "./Styles";

const add = [
    {
        name: 'Muhammad Haris',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Saqib Bhai',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Jumman',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Ali',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Mustafa Ahmed',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
    {
        name: 'Muhammad Haris150',
        mothlyFee: 1800,
        planType: 'flex',
        nextBillingDate: '10-20-2023',
        icon: ''
    },
]
const NewAdd = () => {

    const [counter, setCounter] = useState<number>(0)

    const IncreaseCounter = () => {
        let value = 0;
        if (counter === add.length - 1) {
            setCounter(value)
        } else {
            value = counter
            value += 1
            setCounter(value)
        }
    }
    const DecreaseCounter = () => {
        let value = counter;
        if (value === 0) {
            const lastIndex = add.length - 1
            setCounter(lastIndex)
        } else {
            value -= 1
            setCounter(value)
        }
    }
    const val = useMemo(() => counter, [counter]);
    let pagination = add.map((_item, index) => {
        return (
            <Box
                onClick={() => setCounter(index)}
                right={`${index}rem`}
                sx={{
                    width: '10px',
                    height: '10px',
                    background: index === counter ? '#463C3C' : '#E1E1E1',
                    borderRadius: '100%',
                    zIndex: 20,
                    margin: '3px',
                }}></Box>

        )
    })



    return (
        <Stack direction={'column'} position={'relative'}>
            <Stack
                sx={{
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    // margin:val===0?'0 -8% 0 8%':'',
                    left:val===0?'8%':'',
                    right: val === add.length - 1 ? '8%' : '',
                    padding: '2rem 5rem'
                }}>

                {
                    add.map((data, index) => {
                        return (<Slider data={data} val={val} index={index} key={index} />)
                    })
                }
            </Stack>


            <Paper elevation={2} sx={{ position:'absolute', left: '8.5%', }} onClick={DecreaseCounter} style={sliderBtn}>
                <ArrowBackIosNewIcon />
            </Paper>
            <Paper elevation={2} sx={{ position:'absolute', right: '8.5%', }} onClick={IncreaseCounter} style={sliderBtn}>
                <ArrowForwardIosIcon />
            </Paper>
            <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                {pagination}
            </Stack>
        </Stack>
    );
};

export default NewAdd;

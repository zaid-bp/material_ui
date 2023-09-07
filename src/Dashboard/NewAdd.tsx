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
        planType: 'block',
        nextBillingDate: '20-2-2023',
        icon: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?w=1060&t=st=1694081329~exp=1694081929~hmac=2ac7293a446246eb441e8a8ec3194c1710acb3b27e2c305f8b092eef4e09f625'
    },
    {
        name: 'Saqib Bhai',
        mothlyFee: 1700,
        planType: 'flex',
        nextBillingDate: '30-3-2023',
        icon: 'https://img.freepik.com/free-photo/handsome-man-outdoors-drinking-coffee-with-sunglasses-guy-with-beard-instagram-effect_1212-818.jpg?w=1380&t=st=1694081361~exp=1694081961~hmac=9906b94e6f04c7b558a7786ce1e17829bb6bfe9cd27e3714ded019f6d14aa548'
    },
    {
        name: 'Muhammad Jumman',
        mothlyFee: 1600,
        planType: 'premium',
        nextBillingDate: '4-2-2023',
        icon: 'https://img.freepik.com/premium-photo/onfident-handsome-man-with-arms-crossed-body-smiling-looking-determined_911620-3113.jpg?w=996'
    },
    {
        name: 'Muhammad Ali',
        mothlyFee: 18500,
        planType: 'new',
        nextBillingDate: '6-2-2023',
        icon: 'https://img.freepik.com/free-photo/handsome-man-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair-closeup-portrait_186202-8538.jpg?w=1060&t=st=1694081472~exp=1694082072~hmac=1fcb50a742c3cb0ffed11f97c11bd26790bb6f10e034d5063645f4e887468fa3'
    },
    {
        name: 'Mustafa Ahmed',
        mothlyFee: 2800,
        planType: 'premium',
        nextBillingDate: '8-2-2023',
        icon: 'https://img.freepik.com/free-photo/portrait-serious-concentrated-man-white-shirt_171337-17406.jpg?t=st=1694081464~exp=1694082064~hmac=e2b76e78141859d4d3438f053443a955d6b3d529f21cceb38c5c44b8253000ce'
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

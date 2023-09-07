import { Avatar, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { slideInView, normalSlide, txtStyle, sliderFont } from "./Styles";
import image from "../assets/manImage.png";

const Slider: React.FC<{ data: any, index: number, val: number }> = ({ data, index, val }) => {
    const cardRef = useRef<HTMLDivElement | null>(null)
    const slideIntoView = () => {
        if (cardRef.current)
            cardRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
    const sliderActionBtn={
        fontWeight: 'semi-bold', 
        padding: '0.2rem 2.5rem',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'0 !important',
        paddingBottom:'0 !important'

    }

    useEffect(() => {
        slideIntoView()
    }, [val])

      // Add a window resize event listener to re-scroll when the window is resized
      useEffect(() => {
        window.addEventListener('resize', slideIntoView);
    
        // Cleanup: Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', slideIntoView);
        };
      }, []);
    const { name, mothlyFee, planType, nextBillingDate } = data;
    return (
        <Paper
            ref={index === val ? cardRef : null}
            component={Stack}
            sx={{ padding: '1rem 0', borderRadius:'12px',opacity:val === index ?'':'0.7'}}
            elevation={4}
            style={val === index ? slideInView : normalSlide}
        >
            <Divider sx={{
                position: 'absolute',
                top: '28%',
                height: '1rem',
                width: '100%'
            }} />
            <Stack paddingRight={3} paddingLeft={6}>

                <Stack direction={'row'} sx={{ position: 'relative', padding: '1.5rem 0' }}>
                    <Stack>
                        <Avatar src={image} sx={{ width: '7rem', height: '7rem', borderRadius: '3.5rem', marginBottom: '10px' }} />
                        <Typography variant="h2" style={txtStyle}>{name}</Typography>
                    </Stack>
                    <Stack marginLeft={'auto'} textAlign={'right'} justifyContent={'space-between'} paddingBottom={6} paddingTop={2}>
                        <Typography variant="body2">2 days ago</Typography>
                        <Typography variant="subtitle1">Skip</Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} paddingBottom={2}>
                    <Stack direction={'column'} spacing={1}>
                        <Typography color={'#463C3C'} style={sliderFont} variant="subtitle2" >Monthly Fee</Typography>
                        <Typography color={'#463C3C'} style={sliderFont} variant="subtitle2" >Current Plan</Typography>
                        <Typography color={'#463C3C'} style={sliderFont} variant="subtitle2" >Next Billing Date</Typography>
                    </Stack>
                    <Stack direction={'column'} spacing={1} paddingLeft={2}>
                        <Typography color={'#7B7B7B'} style={sliderFont} variant="subtitle2" >{mothlyFee}</Typography>
                        <Typography color={'#7B7B7B'} style={sliderFont} variant="subtitle2" >{planType}</Typography>
                        <Typography color={'#7B7B7B'} style={sliderFont} variant="subtitle2" >{nextBillingDate}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2} marginLeft={'auto'} alignSelf={'flex-end'}>
                        <Button variant="contained" className="approve" style={sliderActionBtn}>Approve</Button>
                        <Button variant="outlined" className="decline" style={sliderActionBtn}>Deny</Button>
                    </Stack>

                </Stack>
            </Stack>
        </Paper>
    )

}

export default Slider;

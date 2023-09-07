import { Avatar, Card, CardActions, CardContent, Grid, Stack, Typography } from "@mui/material";
import { subTxt, txtStyle } from "./Styles";
import image from "../assets/presentMemAStaff.png";
const PresentMemAStaffAFee = () => {
    const data = [
        { heading: 'Present Members', number: 5, icon: '', tagLine: 'Check in & Check out history' },
        { heading: 'Present Members', number: 5, icon: '', tagLine: 'Check in & Check out history' },
        { heading: 'Present Members', number: 5, icon: '', tagLine: 'Check in & Check out history' },
        { heading: 'Present Members', number: 5, icon: '', tagLine: 'Check in & Check out history' },
    ]
    return (
        <Grid container columns={17} rowGap={2} justifyContent={'space-between'}>
            {
                data.map((data, index) => {
                    const { heading, number, tagLine } = data
                    return (
                        <Grid 
                        component={Card} 
                        item sm={12} md={8} lg={4} 
                        key={index} 
                        sx={{
                            boxShadow:1,
                            borderRadius:'1.25rem',
                            border:'1px solid #E1E1E1'
                            // margin:'1rem'
                        }}
                        >
                            <CardContent component={Stack} spacing={2} sx={{paddingY:'1rem'}}>

                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Avatar src={image} sx={{height:'4rem', width:'4rem'}}/>
                                <Stack spacing={1}>
                                    <Typography variant="h2" style={txtStyle} color={'#463C3C'}>{heading}</Typography>
                                    <Typography variant="h2" style={txtStyle} color={'#FFB500'}>{index===2 || index===3 ?`${number} Members`:`${number}`}</Typography>
                                </Stack>
                            </Stack>

                            <Typography>{tagLine}</Typography>

                            </CardContent>
                            <CardActions 
                            sx={{
                                paddingY:"1rem", 
                                border:'1px solid #E1E1E1', 
                                opacity:'0.9', 
                                background:'rgba(225, 225, 225, 0.10)',
                                borderRadius: '0rem 0rem 1.25rem 1.25rem',
                                }}>
                                <Typography variant="h5" style={subTxt}>View All</Typography>
                            </CardActions>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
};

export default PresentMemAStaffAFee;

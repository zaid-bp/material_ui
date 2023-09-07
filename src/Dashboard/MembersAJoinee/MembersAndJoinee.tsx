import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { txtStyle } from "../Styles";
import image from "../../assets/memAJoinee.png";

const MembersAndJoinee = () => {


    const data = [
        { heading: 'Total Members', number: 80, img: '', tagLine: 'All the members of Gym' },
        { heading: 'Active Members', number: 58, img: '', tagLine: 'All the members of Gym' },
        { heading: 'New Joinee', number: 50, img: '', tagLine: 'All the members of Gym' },
        { heading: 'Idle Members', number: 70, img: '', tagLine: 'All the members of Gym' },

    ]
    return (
        <Grid container columns={2} sx={{ padding: '2rem', height: '21.1875rem' }}>
            {
                data.map((data, index) => {
                    const { heading, number, tagLine } = data
                    return (
                        <Grid item key={index} sm={1} sx={{
                            padding: '1rem',
                            borderBottom: index === 0 || index === 1 ? '1px solid #E1E1E1' : '',
                            borderLeft: index === 1 || index === 3 ? '1px solid #E1E1E1' : ''
                        }}>
                            <Typography variant="h2" style={txtStyle} color={'#463C3C'}>{heading}</Typography>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography variant="h2" color={'#FFB500'} style={txtStyle}>{number}</Typography>
                                <Avatar src={image} sx={{width:'4rem', height:'4rem'}}/>
                            </Stack>
                            <Typography>{tagLine}</Typography>
                        </Grid>
                    )
                })
            }

        </Grid>
    );
};

export default MembersAndJoinee;

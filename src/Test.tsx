import { Box, Stack, Typography } from "@mui/material";

const Test = () => {
  const barData = [
    { price: 1000, month: 'Jan' },
    { price: 1800, month: 'Feb' },
    { price: 20, month: 'Mar' },
    { price: 1500, month: 'Apr' },
    { price: 1000, month: 'May' },
    { price: 1000, month: 'Jun' },
    { price: 1600, month: 'Jul' },
    { price: 1100, month: 'Aug' },
    { price: 1200, month: 'Sep' },
    { price: 100, month: 'Oct' },
    { price: 2500, month: 'Nov' },
    { price: 1800, month: 'Dec' },
    { price: 1350, month: 'Jan' },

  ]
  const maxPrice = barData.reduce((max, obj) => (obj.price > max ? obj.price : max), -Infinity);

  const barGraph = barData.map((value, index) => {
    const { price, month } = value
    console.log(price, month);
    const height: number = (price / maxPrice) * 100;
    const condition = height >= 20;

    return (
      <Stack key={index} height={'100%'} flexGrow={1} justifyContent={'end'} position={'relative'} sx={{marginX:'2px'}}>
        <Stack width={'2rem'} alignItems={'center'} justifyContent={'center'} height={`${height}%`} sx={{ background: price === maxPrice ? 'black' : height>=45?'#7B7B7B':'#FFB300', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
          <Typography variant="subtitle1" color={condition ? "white" : '#E1E1E1'} sx={{ transform: 'rotate(270deg)', fontSize: '1vw', width: 'max-content', marginBottom: condition ? '' : '15vh' }}>{condition ? (`Rs: ${price}`) : ('No recovery')}</Typography>
        </Stack>
        <Typography variant="body1" fontWeight={100} color={'#00000'}>{month}</Typography>
      </Stack>
    )
  })




  return (
    <Stack paddingBottom={3} paddingTop={8} direction={'row'} paddingX={'1.5rem'} sx={{ background: 'white', height: '21.1875rem;', width: '38.875rem', borderRadius: '10px', boxShadow: 1, border: '1px solid #E1E1E1', position: 'relative', }}>
      <Box display={'flex'} width={'97%'} sx={{ background: 'transparent',color:'#E1E1E1', position: 'absolute', left: '10px', borderBottom:'2px dashed #E1E1E1', top:'20%' }}>8</Box>

      <Box display={'flex'} width={'97%'} sx={{ background: 'transparent', color:'#E1E1E1', position: 'absolute',left: '10px', borderBottom:'2px dashed #E1E1E1', top:'50%' }}>4</Box>
      {barGraph}
    </Stack>
  );
};

export default Test;

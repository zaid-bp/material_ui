import { Box, Stack, Typography } from "@mui/material";

const BarGraph = () => {
  const limitLineStyle = {
    display: 'flex',
    width: '97%',
    background: 'transparent',
    color: '#E1E1E1',
    borderBottom: '2px dashed #E1E1E1',
  }

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
    const { price, month } = value;
    const height: number = (price / maxPrice) * 100;
    const condition = height >= 20;

    return (
      <Stack key={index}
        sx={{
          marginX: '2px',
          position: 'relative',
          justifyContent: 'end',
          flexGrow: 1,
          height: '100%'
        }}>
        <Stack width={'2rem'} alignItems={'center'} justifyContent={'center'} height={`${height}%`}
          sx={{
            background: price === maxPrice ? '#463C3C' : height >= 45 ? '#7B7B7B' : '#FFB300',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px'
          }}>
          <Typography
            variant="subtitle1"
            color={condition ? "white" : '#E1E1E1'}
            sx={{
              transform: 'rotate(270deg)',
              fontSize: '1vw',
              width: 'max-content',
              marginBottom: condition ? '' : '15vh'
            }}>
            {condition ? (`Rs: ${price}`) : ('No recovery')}
          </Typography>
        </Stack>
        <Typography variant="body1" fontWeight={100} color={'#00000'}>{month}</Typography>
      </Stack>
    )
  })

  return (
    <Stack direction={'row'}
      sx={{
        background: 'white',
        height: '21.1875rem;',
        width: 'auto',
        borderRadius: '10px',
        boxShadow: 1,
        border: '1px solid #E1E1E1',
        position: 'relative',
        padding: '2rem 1.5rem'
      }}
    >
      <Box style={limitLineStyle} sx={{ position: 'absolute', top: '20%', left: '10px' }}>8</Box>

      <Box style={limitLineStyle} sx={{ position: 'absolute', left: '10px', top: '50%' }}>4</Box>
      {barGraph}
    </Stack>
  );
};

export default BarGraph;

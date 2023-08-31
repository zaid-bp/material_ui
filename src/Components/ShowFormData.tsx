import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';



export default function DataTable() {
    const formData = useSelector((state:RootState)=>state.form.data)
  return (
    <TableContainer component={Paper} sx={{maxWidth:'60rem', margin:'auto'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Province</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.map((data, index) => {
            const {firstName, lastName, city, selectedProvince, email, password} = data;
          return(
          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">{firstName}</TableCell>
              <TableCell align="right">{lastName}</TableCell>
              <TableCell align="right">{email}</TableCell>
              <TableCell align="right">{password}</TableCell>
              <TableCell align="right">{city}</TableCell>
              <TableCell align="right">{selectedProvince}</TableCell>
            </TableRow>
            )
})}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">address1</TableCell>
            <TableCell align="right">address2</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Province</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.map((data, index) => {
            console.log(data);
            
            const {firstName, lastName, city, selectedProvince, addLine1, addLine2} = data;

          return(
          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">{firstName}</TableCell>
              <TableCell align="right">{lastName}</TableCell>
              <TableCell align="right">{city}</TableCell>
              <TableCell align="right">{selectedProvince}</TableCell>
              <TableCell align="right">{addLine1}</TableCell>
              <TableCell align="right">{addLine2}</TableCell>
            </TableRow>
            )
})}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
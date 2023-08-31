import { Stack } from "@mui/material"
import SignIn from "./Components/SignIn"
import { Route, Routes, NavLink } from "react-router-dom";
import Myform from "./Components/Form"
import DataTable from "./Components/ShowFormData"
import Dashboard from "./Components/Dashboard";
function App() {  
  return (
    <>
    <Stack direction={'row'} spacing={3} sx={{position:"absolute", top:'1rem', right:'1rem' }}>
        <NavLink to='/'>Signin</NavLink>
        <NavLink to='/signup'>SignUp</NavLink>
        <NavLink to='/usersdata'>usersdata</NavLink>
    </Stack>

    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/usersdata" element={<DataTable/>}/>
      <Route path="/signup" element={<Myform/>}/>
      <Route path="/dashboard/:username" element={<Dashboard/>}/>

    </Routes>
     </>
  )
}

export default App

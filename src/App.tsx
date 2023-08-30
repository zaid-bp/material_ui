import { Stack } from "@mui/material"
import Myform from "./Components/Form"
import DataTable from "./Components/ShowFormData"

function App() {  
  return (
    <Stack direction={'row'} spacing={5}>
    <Myform/>
    <DataTable/>
    </Stack>
  )
}

export default App

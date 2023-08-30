import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IForm{
    firstName: string;
    lastName: string;
    city: string;
    selectedProvince: string;
    addLine1: string;
    addLine2: string;
  }
interface FormData{
    data:IForm[];
}
const initialState:FormData = {
    data:[]
}
const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        getFormData(state, action:PayloadAction<IForm>){
            state.data=[...state.data, action.payload];
        }
    }
})
export default formSlice.reducer
export const {getFormData, } = formSlice.actions
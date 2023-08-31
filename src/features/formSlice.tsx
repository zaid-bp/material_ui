import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IForm{
    firstName: string;
    lastName: string;
    city: string;
    selectedProvince: string;
    email: string;
    password: string;
  }
  interface UserLogin{
      email:string | null;
      password:string | null;
    }
    interface FormData{
    data:IForm[];
    signInUser:UserLogin;
    isLoggedIn:boolean|undefined;
    userName:string;
}
const initialState:FormData = {
    data:[{
        firstName: "mustafa",
        lastName: "ali",
        city: "string",
        selectedProvince: "string",
        email: "new@gmail.com",
        password: "new",
},],
    signInUser:{
        email:'',
        password:''
    },
    isLoggedIn: undefined,
    userName:'',
}
const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        getFormData(state, action:PayloadAction<IForm>){
            state.data=[...state.data, action.payload];
        },
        signin(state, action:PayloadAction<UserLogin>){
            state.data.filter((_data, index)=>{
                const condition = state.data[index].email === action.payload.email  && state.data[index].password === action.payload.password 
                if(condition){
                    state.isLoggedIn=true;
                    state.signInUser=action.payload;
                    state.userName = state.data[index].firstName+" "+state.data[index].lastName;
                }else{
                    state.isLoggedIn=false;
                    state.signInUser.email=null;
                    state.signInUser.password=null
                }
            })    
        },
        logout(state){
            state.isLoggedIn=false;
            state.signInUser.email=null;
            state.signInUser.password=null;
            state.isLoggedIn=undefined;
        },
    }
})
export default formSlice.reducer
export const {getFormData, signin, logout} = formSlice.actions
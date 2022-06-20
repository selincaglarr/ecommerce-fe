import {createSlice} from "@reduxjs/toolkit"
//50.dakika

//we have action but we didnt do any apı calls
const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFetching:false,
        error:false
    },
    reducers:{

 loginStart:(state)=>{
     state.isFetching = true
 },
 loginSuccess:(state,action)=>{
     state.isFetching=false;
     state.currentUsser = action.payload;
    
 },
 loginFailure:(state)=>{
     state.isFetching=false;
     state.error=true;
  },
        
    }
});

export const {loginFailure,loginSuccess,loginStart} = userSlice.actions
export default userSlice.reducer;

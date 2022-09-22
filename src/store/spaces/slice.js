import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    spaces:[]
}

export const spacesSlice = createSlice({
    name:'spaces',
    initialState,
    reducers:{
        getSpaces:(state,action)=>{
            state.spaces=action.payload;
        },
        makeSpace:(state,action)=>{
            state.spaces = [...state.spaces,action.payload]
        }
    }
})

export const {getSpaces,makeSpace} = spacesSlice.actions;
export default spacesSlice.reducer;
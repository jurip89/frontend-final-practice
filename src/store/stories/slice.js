import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    space:{},
    stories:[]
};

export const storiesSlice= createSlice({
    name:'stories',
    initialState,
    reducers:{
        getStoriesOfASpace:(state,action)=>{
            state.space=action.payload.space;
            state.stories=action.payload.stories || [];
        },
        createSpace:(state,action)=>{
            state.space = action.payload;
            
            state.stories=[];
        },
        createStory:(state,action)=>{
            state.stories=[...state.stories,action.payload]
        },

        editSpace:(state,action)=>{
            state.stories.space=action.payload
        }
        
    }
})

export const {getStoriesOfASpace,createSpace,editSpace,createStory} = storiesSlice.actions;
export default storiesSlice.reducer
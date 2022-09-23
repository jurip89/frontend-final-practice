import { editSpace, getStoriesOfASpace, createStory } from "./slice";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout } from "../appState/thunks";

export const getStoriesOfASpaceThunk = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${apiUrl}/spaces/${id}/stories`);

    dispatch(getStoriesOfASpace(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const createStoryThunk =
  (token, id, body) => async (dispatch, getState) => {
    try {
      const res = await axios.post(`${apiUrl}/spaces/${id}/stories`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(createStory(res.data));
      dispatch(showMessageWithTimeout("success", true, "Story created"));
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteStoryThunk=(id,storyId,token)=>async(dispatch,getState)=>{
    try {
       
            await axios.delete(`${apiUrl}/spaces/${id}/stories/${storyId}`,{headers: { Authorization: `Bearer ${token}` }});
            const spaceWithStories = await axios.get(`${apiUrl}/spaces/${id}/stories`)
           //console.log(spaceWithStories.data)
            dispatch(getStoriesOfASpace(spaceWithStories.data));
            dispatch(showMessageWithTimeout("success", true, "Story deleted"));

    } catch (error) {
        console.log(error)
    }
  }

export const editSpaceThunk = (id, body) => async (dispatch, getState) => {
  try {
    const token =localStorage.getItem('token')
    const res = await axios.put(`${apiUrl}/spaces/${id}`, body,{headers: { Authorization: `Bearer ${token}` }});
    console.log(res.data)
    dispatch(editSpace(res.data));
  } catch (error) {
    console.log(error);
  }
};

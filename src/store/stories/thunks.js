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

export const editSpaceThunk = (id, body) => async (dispatch, getState) => {
  try {
    const res = await axios.patch(`${apiUrl}/spaces/${id}`, body);
    dispatch(editSpace(res.data));
  } catch (error) {
    console.log(error);
  }
};

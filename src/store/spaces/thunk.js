import axios from "axios"
import { getSpaces,makeSpace } from "./slice"
import { createSpace } from "../stories/slice"


export const getSpacesThunk = () => async(dispatch,getState)=>{
    try {
        const res = await axios.get('http://localhost:4000/spaces')
        dispatch(getSpaces(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const makeSpaceThunk = (space) =>async(dispatch,getState)=>{
    try {
        const res = await axios.post('http://localhost:4000/spaces',space)
        dispatch(makeSpace(res.data))
        dispatch(createSpace(res.data))
    } catch (error) {
        console.log(error)
    }
}
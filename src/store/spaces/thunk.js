import axios from "axios"
import { getSpaces,makeSpace } from "./slice"
import { createSpace } from "../stories/slice"
import { apiUrl } from "../../config/constants"

export const getSpacesThunk = () => async(dispatch,getState)=>{
    try {
        const res = await axios.get(`${apiUrl}/spaces`)
        dispatch(getSpaces(res.data))
    } catch (error) {
        console.log(error)
    }
}

// export const makeSpaceThunk = (space,token) =>async(dispatch,getState)=>{
//     try {
//         const res = await axios.post(`${apiUrl}/spaces`,space,{headers: { Authorization: `Bearer ${token}` }})
//         dispatch(makeSpace(res.data))
//         dispatch(createSpace(res.data))
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const editSpaceThunk = (id,body) => async(dispatch,getState)=>{
//     try {
//         const token = localStorage.getItem('token')
//         console.log({id,body,token})
//         const res = await axios.put(`${apiUrl}/spaces/${id}`,body,{headers: { Authorization: `Bearer ${token}` }})
//         console.log(res.data)

//     } catch (error) {
//         console.log(error)
        
//     }
// }
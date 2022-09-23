import React,{useState} from 'react'
import { selectSpace } from '../store/stories/selectors'
import { useSelector,useDispatch } from 'react-redux'
import { editSpaceThunk } from '../store/stories/thunks'

export const FormSpace = () => {

    const space = useSelector(selectSpace)
    const token = localStorage.getItem('token')

    const [title,setTitle]= useState(space.title)
    const [description,setDescription]= useState(space.description? space.description : '')
    const [backgroundColor,setBackgroundColor]= useState(space.backgroundColor)
    const [color,setColor]= useState(space.color)

    const dispatch =useDispatch();
    const body ={title,description,backgroundColor,color}
    const {id}= space
   
    const submit = (e)=> {
        e.preventDefault()
        
        dispatch(editSpaceThunk(id,body,token))
    }
  return (
    <form onSubmit={submit} style={{marginBottom:20}}>
        <div style={{display:'flex', flexDirection:'column'}}>
        <p>Title:<input type="text" placeholder='title' value={title}  onChange={(e)=> setTitle(e.target.value)}/></p>
        <p>Description:<input type="text" placeholder='description' value={description} onChange={(e)=> setDescription(e.target.value)}/></p>
        <p>Text Color:<input type="color" placeholder='text color' value={color} onChange={(e)=> setColor(e.target.value)}/></p>
        <p>Background Color:<input type="color" placeholder='background' value={backgroundColor} onChange={(e)=> setBackgroundColor(e.target.value)}/></p>
        </div>
        
        
        <button type='submit'>Confirm the space bro!</button>
    </form>
  )
}


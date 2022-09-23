import { useEffect } from "react"
import { Title } from "../styled"
import { Link } from "react-router-dom"
import { LinkWord } from "../styled"
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux"
import { getSpacesThunk } from "../store/spaces/thunk"
import { selectSpaces } from "../store/spaces/selectors"
export const Homepage = () => {
const dispatch = useDispatch();
const spaces =useSelector(selectSpaces)
console.log(spaces)

useEffect(()=>{
  dispatch(getSpacesThunk())
},[dispatch])

  return (
    <Container>
     <Title>Cool story bro</Title>
      <Container>
        {spaces.map(el=> (
        <div key={el.id} style={{color:el.color,backgroundColor:el.backgroundColor}}>
          <h4>{el.title}</h4>
          <p>{el.description}</p>
        <Link to={`spaces/${el.id}`} style={LinkWord}><button>Visit space</button></Link>
        </div>
        ))}
      </Container>
    </Container>
  )
}

const Container = styled.div`
  margin: 20px
`
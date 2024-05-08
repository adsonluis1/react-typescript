import styled from "styled-components"
import { Container } from "../App"
import Menu from "./Menu"


const Div = styled.div`
  background: ${({theme})=> theme.color.secondary};
  width: 100%;
  padding:2em;
  `

const Title = styled.h1`
  color: ${({theme})=> theme.color.main};
  font-size:1.5em;
  text-align: center;
  font-family: ${({theme})=> theme.fontFamily};
  font-weight: bolder;
  `
const Header = () => {
    const marcas = ['Netflix','Mojang','Microsoft','Apple','Sansung'].splice(0,1)
    return (
    <header>
         <Container>
            {marcas.map((marca,index)=> [
                <Div key={index}>
                    <Title>{marca}</Title>
                </Div>
            ])}
      </Container>
      <Menu />
    </header>
  )
}

export default Header
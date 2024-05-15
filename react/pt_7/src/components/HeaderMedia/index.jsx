import {useState} from 'react'
import { HeaderMediaStyled } from './HeaderMedia.styled'
import Button from '../../style/components/button.style'
import { ButtonExit } from '../../style/components/ButtonExit.styled'

const HeaderMedia= () => {
    const buttons = [{nome:'Home',id:1},{nome:'Assinaturas',id:2},{nome:'About',id:3},{nome:'Assistir',id:4}]
    const  [clicked, setClicked] = useState(false)
    return (
    <HeaderMediaStyled $clicked={clicked.toString()}>
        {buttons.map((elementos)=>[
             <Button key={elementos.id}>{elementos.nome}</Button>
        ])}
        <svg onClick={()=> setClicked((prev)=> !prev)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg>
        
        <ButtonExit onClick={()=> setClicked((prev)=> !prev)} id='exit'>X</ButtonExit>
    </HeaderMediaStyled>
  )
}

export default HeaderMedia
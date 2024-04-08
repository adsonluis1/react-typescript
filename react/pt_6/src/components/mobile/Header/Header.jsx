import style from './Header.module.css'
import { useState } from "react"
import MenuAcoes from '../menuAcoes/MenuAcoes'
const Header = () => {
    const [display, setDisplay] = useState(false)
    const handleDisplay = ()=>{
        setDisplay((dis)=> !dis)
        if(!display)
          document.body.style.overflow = 'hidden'
        
        else
            document.body.style.overflow = ''
        
    }

    return (
        <>
        {display && <MenuAcoes handleAcoes={handleDisplay}/>}
        <header className={style.header}>
            <nav>
                <ul>
                    <li onClick={()=> handleDisplay()}>///</li>
                </ul>
            </nav>
        </header>
        </>
  )
}

export default Header
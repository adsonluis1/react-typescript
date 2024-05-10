import React, { useState } from 'react'
import { Nav } from '../style/components/Nav.style'
import Button from '../style/components/button.style'

const Menu = ({backgroudColor}) => {
    const [select, setSelect] = useState('')
   
  return (
    <Nav>
        {select== 'home' && <Button $select={true} onClick={()=> setSelect('')}>Home</Button>}
        {select!= 'home' && <Button $select={false} onClick={()=> setSelect('home')}>Home</Button>}
        {select == 'assinaturas' && <Button $select={true} onClick={()=> setSelect('')}>Assinaturas</Button>}
        {select != 'assinaturas' && <Button $select={false} onClick={()=> setSelect('assinaturas')}>Assinaturas</Button>}
        {select == 'about' && <Button $select={true} onClick={()=> setSelect('')}>About</Button>}
        {select != 'about' && <Button $select={false} onClick={()=> setSelect('about')}>About</Button>}
        {select == 'assistir' && <Button $select={true} onClick={()=>setSelect('')}>Assistir</Button>}
        {select != 'assistir' && <Button $select={false} onClick={()=>setSelect('assistir')}>Assistir</Button>}
    </Nav>
  )
}

export default Menu
import React from 'react'
import { TwuColunsStyled } from './TwuColuns.styled'
import DivNews from '../news'
import Img from '../news/Img'


const TwuColuns = () => {
    const title = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum minima aut doloribus ducimus totam vel dicta cumque, aspernatur dolores aperiam neque quo repellendus tenetur velit blanditiis. Ipsam, autem vitae!'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo assumenda nam non harum beatae dolor asperiores magni repellat veniam delectus dolorum atque quo expedita culpa, totam, ullam vel molestiae recusandae!'
    const img1 = {
        src:'https://tse1.mm.bing.net/th?id=OIP.iCt9vBX1aNZbmxXaJX2lzwHaE8&pid=Api&P=0&h=180',
        alt:'dor'
    }
    const img2 = {
        src:'https://tse1.mm.bing.net/th?id=OIP.kLJpOM4STrD8hVtFnuxCEgHaE8&pid=Api&P=0&h=180',
        alt:'dor'
    }

    return (
    <TwuColunsStyled>
        <DivNews title={title} description={description}>
            <Img src={img1.src} alt={img1.alt}/>
        </DivNews>
        <DivNews title={title} description={description}>
            <Img src={img2.src} alt={img2.alt}/>
        </DivNews>
    </TwuColunsStyled>
  )
}

export default TwuColuns
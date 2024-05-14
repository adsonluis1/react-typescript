import DivNews from "../components/news";
import Img from "../components/news/Img";
import { TwuColunsStyled } from "../components/twuColuns/TwuColuns.styled";

const title = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum minima aut doloribus ducimus totam vel dicta cumque, aspernatur dolores aperiam neque quo repellendus tenetur velit blanditiis. Ipsam, autem vitae!'
const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo assumenda nam non harum beatae dolor asperiores magni repellat veniam delectus dolorum atque quo expedita culpa, totam, ullam vel molestiae recusandae!'
const src = 'https://tse1.mm.bing.net/th?id=OIP.iCt9vBX1aNZbmxXaJX2lzwHaE8&pid=Api&P=0&h=180'
const alt = 'dor'
export default {
    args:{
        title:title,
        description:description,
        src:src,
        alt:alt
    },

    render: (args) => {
       return ( 
       <TwuColunsStyled>
            <DivNews {...args} />
        </TwuColunsStyled>)
    }
}

export const OneColuns={

}

export const TwuColuns={
    render: (args) => {
        return (
        <TwuColunsStyled>
            <DivNews {...args} />
            <DivNews {...args} />
        </TwuColunsStyled>
        )
    }
}

export const TwuColunsOnImg={
    render: (args) => {
        return (
        <TwuColunsStyled>
            <DivNews {...args}>
                <Img {...args}/>
            </DivNews>
            <DivNews {...args}>
                <Img {...args}/>
            </DivNews>
        </TwuColunsStyled>
        )
    }
}
import { useState } from 'react'
import './App.css'

type card={
  value:string | null
  isFlip:boolean
  id:number
}

const bagunça = ()=>{
  const peças:string[] = ['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h']
  peças.sort(() => Math.random() - 0.3)
  return peças.map((evt:string,index)=>({
    value:evt,
    isFlip:false,
    id:index
  }))
}


bagunça()
function App() {
  const [vidas, setVidas] = useState(7)
  const [flippedCard, setFlippedCard] = useState<card[]>([])
  const [cards, setCards] = useState(bagunça)




  const heandleCards = (click:card)=>{
    if(vidas === 0) return
  
    if (flippedCard.length === 2) return
   
    const newCard = cards?.map((card:card)=>{
      return card.id === click.id ? {...card, isFlip:true} : cards
    })

    setCards(newCard)
    
    setFlippedCard([...flippedCard,click])

    if(flippedCard.length === 1){
        setTimeout(()=> {
          const [firstCard] = flippedCard
          
          if(firstCard.value !== click.value){
            const resetCard= cards.map((card) =>{
              return card.id === firstCard.id || card.id === click.id ? {...card, isFlip: false}:card
            })

            setCards(resetCard)
            setVidas((prevt)=> prevt-1)
          }

          setFlippedCard([])
        },600)
    }
  }
    
  
  // console.log(cards!)
  

  return (
    <>
    <h1>Jogo Da Memoria</h1>
    <h3>vidas: {vidas}</h3>
    <section>
      {cards!.map((evt:card, index)=>[
        <div className='div_pecas' key={index} onClick={()=>{
          heandleCards(evt)
          console.log(evt)
        }}>
          <h1>{evt.isFlip?evt.value:'?'}</h1>
        </div>
      ])}
    </section>
    </>
  )
}

export default App

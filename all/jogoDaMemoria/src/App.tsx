import { useState } from 'react'
import './App.css'

type card={
  value:string | null
  isFlip:boolean 
  id:number
}

const baguncar = (array:card[])=>{
  array.sort(()=> Math.random() - 0.8)
  return array
}

const gerenerationCards = ()=>{
  const peças:string[] = ['a','b','c','d','e','f','g','h','i','j']
  
  const cards = peças.map((evt:string)=>({
    value:evt,
    isFlip:false
  }))

  const duplicateCards = cards.concat([...cards])
  .map((card,index)=> ({...card,id:index}))

  return baguncar(duplicateCards)

}


gerenerationCards()

function App() {
  const [vidas, setVidas] = useState(7)
  const [flippedCard, setFlippedCard] = useState<card[]>([])
  const [cards, setCards] = useState<card[]>(gerenerationCards)
  const result = cards.filter((card)=> card.isFlip).length



  const heandleCards = (click:card)=>{
    if(vidas === 0) return
  
    if (flippedCard.length === 2) return
   
    const newCard = cards?.map((card:card)=>{
      return card.id === click.id ? {...card, isFlip:true} : card
    })

    setCards(newCard)
    console.log(cards)
    
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
    
  return (
    <>
    <h1>Jogo Da Memoria</h1>
    {vidas === 0?<h2>suas vidas acabaram</h2>:result === cards.length?<h2>parabens vc ganhou</h2>:<h2>vidas: {vidas}</h2>}
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

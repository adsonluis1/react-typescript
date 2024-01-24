import React, {MouseEvent, useEffect, useState } from 'react';
import './App.css'

function App() {
  const peças:string[] = ['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h']
  const [select, setSelect] = useState<string | null>(null)
  const [prevetSelect, setPrevetSelect] = useState<string | null>(null)

  const bagunça = (arr:string[])=>{
    arr.sort(() => Math.random() - 0.5);
  }
  useEffect(()=>{
    peças.sort(() => Math.random() - 0.5);
  },[])
  
  // bagunça(peças)
  console.log(peças)
  return (
    <>
    <h1>Jogo Da Memoria</h1>
    <section>
       {peças.map((evt:string,id:number)=>[
          <div className='div_pecas' key={id} onClick={(div:MouseEvent<HTMLDivElement>)=>{
              setSelect(evt)
          }}>
            <h1>{select && evt}</h1>
          </div>
       ])}
    </section>
    </>
  )
}

export default App

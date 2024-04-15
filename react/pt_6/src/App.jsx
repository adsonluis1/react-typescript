import './App.css'
import { useState, useEffect } from 'react'
import UseMediaQuery from './hooks/UseMediaQuery'
import HomeM from './pages/mobile/Home/HomeM'
import HomeP from './pages/pc/Home/HomeP'
import Count from './components/Count'
import ErrorBoundary from './components/ErrorBoudary'
import PadraoCompound from './components/PadraoCompound'
import { useCounterContext } from './components/CounterContext'
import Button from './components/Button'




function App() {
  const typeScreen = false //UseMediaQuery()
  const [state, actions] = useCounterContext()
  const [num, setNum] = useState('') 
  return (
    <>
      <h1>com ErrorBoundary</h1>
      <ErrorBoundary>
        <Count />
      </ErrorBoundary>
      <h1>sem ErrorBoundary</h1>
      <Count />
      {typeScreen && typeScreen !='pc' && typeScreen !='notbook' && <HomeM />}
      {typeScreen && typeScreen !='celular' && typeScreen !='tablet' && <HomeP />}
      <PadraoCompound />
      <br />
      <p>{state.counter}</p>
      <input type="text" value={num} onChange={(e)=> setNum(e.target.value)}/>
      <br />
      <div>
        <Button text={'+1'} disable={state.loading} onBtnClick={actions.increase}/>
        <Button text={'-1'} disable={state.loading} onBtnClick={actions.decrease}/>
        <Button text={`state = ${num}`} disable={state.loading} onBtnClick={actions.setCounter} value={{counter:+num}}/>
      </div>
      <br />
      <div>
        <Button text={'asyncIncrease'} disable={state.loading} onBtnClick={actions.asyncIncreaseStart} />
        <Button text={'asyncIncreaseError'} disable={state.loading} onBtnClick={actions.asyncIncreaseError} />
      </div>
    </>
  )
}

export default App

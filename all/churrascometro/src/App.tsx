import { useState } from 'react'
import './App.css'
import Selecao from './components/Selecao'
import { Route, Routes} from 'react-router-dom'
import Final from './components/Final'
import { carnes } from './types/selecao'

function App() {
  const [pessoas, setPessoas] = useState<string>('1')
  
  const carnes:carnes = {
        carne:false,
        frango:false,
        linguiça:false,
        paoDeAlho:false
    }

  return (
    <main>
        <Routes>
          <Route path='/Final' element={<Final pessoas={pessoas} carnes={carnes}/>}/>
          <Route path='/' element={<Selecao setPessoas={setPessoas} pessoas={pessoas} carnes={carnes}/>} />
        </Routes>
    </main>
  )
}

export default App

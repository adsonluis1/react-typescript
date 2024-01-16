import './App.css'
import Hooks from './components/Hooks'
import Props from './components/Props'
import ListaDeCompras from './exercicios/ListaDeCompras'
import Login from './exercicios/Login'

function App() {
  return (
    <>
    <Props nome='adson'/>
    <Hooks />
    {/* exercicio */}
    <Login />
    <ListaDeCompras />
    </>
  )
}

export default App

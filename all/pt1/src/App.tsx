import './App.css'
import Hooks from './components/Hooks'
import Props from './components/Props'
import UseReducer from './components/UseReducer'
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
    <UseReducer />
    </>
  )
}

export default App

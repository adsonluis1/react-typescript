import './App.css'
import PropChild from './components/PropChild'
import Timer from './components/Timer'
import TimerT from './components/TimerT'
import UseEfect from './components/UseEfect'
import UserReducer from './components/UseReducer'
import UseReducerT from './components/UseReducerT'
// import Ex1 from './ex/Ex1'
// import Ex2 from './ex/Ex2'

function App() {
  
  return (
    <>
      {/* <UseEfect /> 
      <Timer /> 
      <TimerT /> 
      <UserReducer />*/}
      <UseReducerT /> 
      {/* <PropChild>
          <Timer />
          <p>fim</p>
      </PropChild> */}
      {/* <Ex1 infoUsuario={{nome:'adson', idade:18, cpf:103.584}}/> */}
      {/* <Ex2 /> */}
    </>
  )
}

export default App

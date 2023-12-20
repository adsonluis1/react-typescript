import './App.css'
import PropChild from './components/PropChild'
import Timer from './components/Timer'
import TimerT from './components/TimerT'
import UseEfect from './components/UseEfect'
import UserReducer from './components/UseReducer'
import UseReducerT from './components/UseReducerT'

function App() {
  
  return (
    <>
      {/* <UseEfect /> 
      <Timer /> 
      <TimerT /> 
      <UserReducer />
      <UseReducerT /> */}
      <PropChild>
          <Timer />
          <p>fim</p>
      </PropChild>
    </>
  )
}

export default App

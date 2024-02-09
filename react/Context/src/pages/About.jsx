import UseColorTitleContext from "../Hooks/UseColorTitleContext"
import UseCountContext from "../Hooks/UseCountContext"

const About = () => {
 // fazendo o context usando o hook personalizado 
 const {counter} =UseCountContext()
  const {color, dispatch} = UseColorTitleContext()

  const setTitleColor = (color)=>{
    dispatch({type:color})
  }
 return (
    <div>
        <h1 style={{color: color}}>sobre nós</h1>
        <h2>{counter}</h2>
        {/*usando useReducer no context*/}
        <div>
          <button onClick={()=> setTitleColor('AQUA')}>aqua</button>
          <button onClick={()=> setTitleColor('BLUEVIOLET')}>violet</button>
          <button onClick={()=> setTitleColor('BLACK')}>preto</button>
        </div>
    </div>
  )
}

export default About
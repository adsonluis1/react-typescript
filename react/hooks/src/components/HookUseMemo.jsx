// o UseMemo tem a msm finalidade do UseCallback, só que, o UseCallback é pra funções ja o UseMemo é pra valores
import {useState, useEffect, useMemo} from 'react'


const HookUseMemo = () => {
    const [text, setText] = useState('')
    const numerosPremiados = useMemo(()=>{
        return ['10','50','100']
    }, [])

    {useEffect(()=>{
        console.log('numero alterado')
    },[numerosPremiados])}

    return (
    <div>
        <h1>UseMemo</h1>

        <input 
        type="text"
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        placeholder='digite algum numero'
        />

        {numerosPremiados.includes(text)&& <p>Numero premiado</p>}
    </div>
  )
}

export default HookUseMemo
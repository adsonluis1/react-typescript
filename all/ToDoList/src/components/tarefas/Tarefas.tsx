// style
import styles from './Tarefas.module.css'

// interfaces 
import {Itarefas} from '../../App'
import {Dispatch, SetStateAction} from 'react'

interface tarefas{
    tarefas:Itarefas[],
    SetTarefas:Dispatch<SetStateAction<Itarefas[]>>,
    setClickedTarefas:Dispatch<SetStateAction<Itarefas | undefined>>
}

export const Tarefas = ({tarefas, SetTarefas, setClickedTarefas}:tarefas) => {
    const removeTarefa = (e:Itarefas)=>{
      SetTarefas((prev)=> prev.filter((ele)=> ele.name != e.name))
    }  

  return (
    <section>
    <h2>Suas tarefas:</h2>
      {tarefas && tarefas.length > 0 &&
      tarefas.map((tarefa)=>[
        <div key={tarefa.id} className={styles.divPai}>
          <div className={styles.divF}>
            <p><b>{tarefa.name}</b></p>
            <p>Dificuldade: {tarefa.dificuldade}</p>
          </div>

          <div className={styles.divFilha}>
            <button onClick={()=> setClickedTarefas(tarefa)}>✏️</button>
            <button onClick={()=> removeTarefa(tarefa)}>🗑️</button>
          </div>
        </div>
      ])
      }
    </section>
  )
}

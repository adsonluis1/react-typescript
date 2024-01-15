type Prop = {
    nome:string
}

const Props = ({nome}:Prop) => {
  return (
    <div>
        <p>Bem vindo {nome}</p>
    </div>
  )
}

export default Props
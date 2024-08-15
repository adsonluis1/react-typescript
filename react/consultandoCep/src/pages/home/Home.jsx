import Form from '../../components/form/Form'

// style component
import * as S from './Home.styled'

const Home = () => {
  return (
    <S.Main>
      <S.Section>
        <S.H1>Cep</S.H1>
        <Form/>
      </S.Section>
    </S.Main>
  )
}

export default Home
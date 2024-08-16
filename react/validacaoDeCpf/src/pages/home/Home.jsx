import FormCpf from "../../components/form/Form"
import * as S from "./Home.styled"

const Home = () => {
  return (
    <S.Main>
        <S.Secition>
            <FormCpf />
        </S.Secition>
    </S.Main>
  )
}

export default Home
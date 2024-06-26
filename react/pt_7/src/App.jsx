import styled from 'styled-components'
import Button from './style/components/button.style'
import Header from './components/Header'
import TwuColuns from './components/twuColuns'
import HeaderMedia from './components/HeaderMedia'
export const Container = styled.section`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `

function App() {
  
  return (
    <>
      <Header />
      <HeaderMedia />
      <Container>
        {/* <Button $select='true'>Click</Button>
        <Button>Click</Button> */}
      </Container>
      <TwuColuns />
    </>
  )
}

export default App

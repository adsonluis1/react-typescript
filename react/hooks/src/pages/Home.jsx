import HookUseCallback from '../components/HookUseCallback'
import HookUseReducer from '../components/HookUseReducer'
import HookUseRef from '../components/HookUseRef'

const Home = () => {
  return (
    <div>
      <HookUseReducer />
      <HookUseRef />
      <HookUseCallback />
    </div>
  )
}

export default Home
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseReducer from '../components/HookUseReducer'
import HookUseRef from '../components/HookUseRef'

const Home = () => {
  return (
    <div>
      <HookUseReducer />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
    </div>
  )
}

export default Home
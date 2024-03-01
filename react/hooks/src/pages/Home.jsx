import HookUseCallback from '../components/HookUseCallback'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
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
      <HookUseImperativeHandle />
    </div>
  )
}

export default Home
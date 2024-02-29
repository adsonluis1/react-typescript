import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"

const TUseContext = () => {
    const contextValue = useContext(SomeContext)

    console.log(contextValue)
  return (
    <div>TUseContext</div>
  )
}

export default TUseContext
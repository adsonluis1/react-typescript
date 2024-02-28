import React, { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {
    const {contextValue} = useContext(SomeContext)

    return (
    <div>
      <h2>Context:{contextValue}</h2>
    </div>
  )
}

export default About
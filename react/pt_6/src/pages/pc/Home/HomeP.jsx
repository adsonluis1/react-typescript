// home PC
import React from 'react'
import Header from '../../../components/pc/header/Header'
import Posts from '../../../components/Posts'
const Home = () => {
  return (
    <>
    <Header />
    <main style={{padding:'0px 10px'}}>
      <Posts />
    </main>
    </>
  )
}

export default Home

// home mobile
import Posts from '../../../components/Posts'
import style from './Home.module.css'
import Header from '../../../components/mobile/Header/Header'

const Home = () => {
  

  return (
    <>
    <Header />
    <main className={style.main}>
        <Posts />
    </main>
    </>
  )
}

export default Home
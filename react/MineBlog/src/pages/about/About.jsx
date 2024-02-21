import { Link } from 'react-router-dom'
import style from './About.module.css'

const About = () => {
  return (
    <section className={style.section}>
        <h1>Projeto de <span>Mini</span> blog</h1>
        <h2>Projeto feito com React e FireBase</h2>
        <Link to={'/posts/create'}>Click aqui</Link>
    </section>
  )
}

export default About
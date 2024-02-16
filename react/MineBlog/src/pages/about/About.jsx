import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <section>
        <h1>Projeto de <span>Mini</span> blog</h1>
        <h2>Projeto feito com React e FireBase</h2>
        <Link to={'/posts/create'}>Click aqui</Link>
    </section>
  )
}

export default About
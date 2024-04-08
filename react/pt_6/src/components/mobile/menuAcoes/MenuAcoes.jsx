import style from './MenuAcoes.module.css' 

const MenuAcoes = ({handleAcoes}) => {
  return (
    <section className={style.section}>
        <div className={style.divBtn}>
            <p onClick={()=> handleAcoes()}>///</p>
        </div>
        <div className={style.divAcoes}>
            <p>Posts1</p>
            <p>Posts2</p>
            <p>Posts3</p>
            <p>Posts4</p>
            <p>Posts5</p>
            <p>Posts6</p>
        </div>
    </section>
  )
}

export default MenuAcoes
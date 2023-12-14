function Props (props){
    return (
        <div>
            <h1>Escalação</h1>
            
            <ul>
                <h2>goleiro</h2>
                <li>{props.goleiro}</li>
                <h2>laterais</h2>
                <li>{props.latera1}</li>
                <li>{props.latera2}</li>
                <h2>zaga</h2>
                <li>{props.zaga1}</li>
                <li>{props.zaga2}</li>
            </ul>
        </div>
    )
}

export default Props
import { useState } from "react"

function ListTask ({list}){

    
    return (
        <ul>
            {(list.map((evt)=>{
                <h2>{evt}</h2>
            }))}
        </ul>
    )
}

function Ex1 (){
    return (
       <ListTask list={['dad', 'hehe']}/>
    )
}

export default Ex1
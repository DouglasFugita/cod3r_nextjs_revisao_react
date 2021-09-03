import { useState } from "react"

export default function contador(){

    const [x, setX] = useState(0)

    function menosUm(){
        setX(x - 1)
    }

    function maisUm(){
        setX(x + 1)
    }

    return(
        <div>
            <h1>Contador</h1>
            <div>Valor: {x}</div>
            <button onClick={menosUm}>-</button>
            <button onClick={maisUm}>+</button>
        </div>
    )
}
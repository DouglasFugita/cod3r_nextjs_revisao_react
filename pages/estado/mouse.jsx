import { useState } from "react"

export default function mouse(){
    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#222",
        color: "#bbb",
        height: "100vh"
    }

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function quandoMover(event){
        setX(event.clientX)
        setY(event.clientY)
    }
        
    return(
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}
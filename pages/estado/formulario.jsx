import { useState } from "react"

export default function formulario(){
    const [valor, setValor] = useState("inicial")

    function handleChange(event){
        setValor(event.target.value)
    }

    return(
        <div>
            <h1>Formulario</h1>
            <input type="text" placeholder="Nome" value={valor} onChange={handleChange}/>
        </div>
    )
}
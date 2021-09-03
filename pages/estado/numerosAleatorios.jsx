import { useState } from "react";

export default function numerosAleatorios(){
    const [numeros, setNumeros] = useState([]);

    function gerarAleatorio(){
        let arrayNumeros = []

        while(arrayNumeros.length < 6){
            let novoNumero = Math.floor(Math.random() * 60)
            while (arrayNumeros.includes(novoNumero)) {
                novoNumero = Math.floor(Math.random() * 60)
            }
            arrayNumeros.push(novoNumero)
        }

        setNumeros(arrayNumeros)
    }

    return (
        <div>
            <h1>Números aleatorios</h1>
            <button onClick={gerarAleatorio}>Gerar</button>
            <ul>
                {numeros.map((numero, index) => <li key={index}>{numero}</li>)}
            </ul>            
        </div>
    )
}
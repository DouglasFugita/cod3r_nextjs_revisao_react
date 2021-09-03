export default function Filho(props){
    console.log(props)
    return (
        <div>
            Filho<button onClick={() => props.funcao("Passei no Enem")}>Falar com o pai</button>
        </div>
    )
}
export default function Repeticao1(){
    const listaAprovados=[
        "Joao",
        "Maria",
        "Jose",
        "Pedro",
        "Ana",
        "Paulo",
        "Julia"
    ]

    function renderizarLista(){
        return listaAprovados.map((nome, index)=>{
            return <li key={index}>{nome}</li>
        })
    }

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}
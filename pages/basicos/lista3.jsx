
function gerarLista(final = 10) {

    const lista = []

    for (let index = 1; index <= final; index++) {
        lista.push(<span key={index}>{index}, </span>)
    }
    return lista
}

export default function lista3() {
    return (
        <div>
            <div>
                {gerarLista(8)}
            </div>
            <div>
                {gerarLista(25)}
            </div>
        </div>
    )
}
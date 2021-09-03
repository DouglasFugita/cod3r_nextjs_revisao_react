import listaProduto from "../../data/listaProduto"
import Produto from "../../model/produto"

export default function repeticao2(){

    function renderizarLista(){
        return listaProduto.map(item =>{
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.preco}</td>
                </tr>
            )
        })
    }

    return (
        <table style={{border: "1px solid #000"}}>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {renderizarLista()}
            </tbody>
        </table>
    )
}
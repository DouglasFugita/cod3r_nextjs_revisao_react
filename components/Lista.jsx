import ListaItem from "./ListaItem";

export default function Lista(props){
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}
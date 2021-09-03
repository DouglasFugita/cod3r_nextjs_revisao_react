import If from "../../components/If";
import ListaItem from "../../components/ListaItem";

export default function condicional2(){

    const numero = 5

    return (
        <div>
            <If teste={numero % 2 === 0}> 
                <h1>O numero eh par</h1>
            </If>
            <If teste={numero % 2 === 1}> 
                <h1>O numero eh impar</h1>
            </If>            
        </div>
    )
}
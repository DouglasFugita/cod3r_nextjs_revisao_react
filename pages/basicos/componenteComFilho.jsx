import Lista from "../../components/Lista";
import ListaItem from "../../components/ListaItem";

export default function componenteComFilho(props) {
  return (
    <div>
        <Lista>
            <ListaItem conteudo="Item 1"/>
            <ListaItem conteudo="Item 2"/>
            <ListaItem conteudo="Item 3"/>
        </Lista>
    </div>
  );
}
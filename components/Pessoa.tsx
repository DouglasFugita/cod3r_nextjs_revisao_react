interface PessoaProps {
    nome: string;
    idade?: number;
}

export default function Pessoa(props:PessoaProps){
    return(
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.idade ?? "Nao informada"}</h2>
        </div>
    )
}

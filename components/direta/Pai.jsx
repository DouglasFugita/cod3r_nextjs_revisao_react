import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <Filho nome="Jose" familia={props.familia} />
            <Filho nome="Joao" familia={props.familia} />
            <Filho {...props} nome="Maria"/>
        </div>
    )
}
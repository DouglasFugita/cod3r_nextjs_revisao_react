import { Component } from "react"
import Contador from "../../components/Contador"

export default class ContadorPage extends Component {

    valor

    render() {
        return (
            <>
                <Contador valorInicial={100} passo={5}/>
                <Contador  />
            </>
        )
    }
}
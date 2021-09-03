export function Comp1(){
    return(
        <h2>Comp1</h2>
    )
}

export function Comp2(){
    return(
        <h2>Comp2</h2>
    )
}

export default function Comp3(){
    return(
        <h2>Comp3</h2>
    )
}

export const Comp4 = () =>{
    return <h2>Comp 4</h2>
}

const Comp5 = () => <h2>Comp 5</h2>

const Comp6 = () => (
    <div>
        <h2>Comp 6</h2>
    </div>
)

export{
    Comp5, Comp6
}
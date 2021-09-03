import Linha from './components/Linha'
import styles from './tabuleiro.module.css'

export default function tabuleiro(){
    return(
        <div className={styles.container}>
            <Linha />
            <Linha preta/>
            <Linha />
            <Linha preta/>
            <Linha />
            <Linha preta/>
            <Linha />
            <Linha preta/>                                    
        </div>
    )
}
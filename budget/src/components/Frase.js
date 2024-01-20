import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p>Este é um componente com uma frase!</p>
            <p className={styles.fraseContent}>
                Outro componente frasial!
            </p>
        </div>

    )
}

export default Frase;
import { useState } from 'react';
import styles from "../../styles/Home.module.css"

export default function Contador() {
    const [contagem, setContagem] = useState(0);

    const RetirarUm = () => {
        setContagem(contagem - 1);
    };

    const AdicionarUm = () => {
        setContagem(contagem + 1);
    };

    return (
        <div className={styles.container}>
            <h1>Contador:</h1>
            <p>Valor: {contagem}</p>
            <div>
                <button onClick={RetirarUm}>Remover</button>
                <button onClick={AdicionarUm}>Adicionar</button>
            </div>
        </div>
    )
}

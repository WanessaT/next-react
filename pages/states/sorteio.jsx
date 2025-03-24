import Numero from "@/components/numero";
import styles from "../../styles/Home.module.css"
import { useEffect, useState } from "react";
import { mega } from "@/functions/mega";

export default function SorteioMega() {
    const [qtde, setQtde] = useState(6);
    const [numeros, setNumeros] = useState([]);

    useEffect(() => {
        setNumeros(mega())
    }, []);

    const renderNumber = () => {
        return numeros.map(
            numero => <Numero key={numero} numero={numero} />
        );
    };

    return (
        <div className={styles.container}>
            <h2 style={{ color: "#fff", padding: 0 }}>
                Números Sorteados
            </h2>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem"
            }}>
                {renderNumber()}
            </div>
            <label htmlFor="number">
                Quantos numeros quer sortear?
            </label>
            <div>
                <input
                    type="number"
                    min={6}
                    max={18}
                    id="number"
                    value={qtde}
                    onChange={(event) => setQtde(event.target.value)}
                />
                <button onClick={() => setNumeros(mega(qtde))}>
                    Sortear
                </button>
            </div>
        </div>
    )
}

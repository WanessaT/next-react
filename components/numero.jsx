
export default function Numero(props) {
    return (
        <span
            style={{
                backgroundColor: "#000",
                color: "#fff",
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: "2.5rem"
            }}
        >
            {props.numero}
        </span>
    )
}

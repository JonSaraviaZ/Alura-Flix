import styles from "./ListaOpciones.module.css";

const ListaOpciones = (props) => {

    const categorias = [
        "Front End",
        "Back End",
        "Innovación y gestión"
    ];

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarCategoria(e.target.value);
    };

    return <div className={styles.listaOpciones}>
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
            {categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
            </select>
    </div>
    
};

export default ListaOpciones;
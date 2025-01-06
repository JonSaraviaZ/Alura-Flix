import style from "./CampoTexto.module.css";

const TextField = (props) => {
  const placeholderModificado = `${props.placeholder} ...`;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={style.campoTexto}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      ></input>
    </div>
  );
};

export default TextField;
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import BotonIcono from "../BotonIcono/BotonIcono";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import styles from "../ModalZoomNuevoVideo/MZNuevoVideo.module.css";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 150px;
  width: 50%;
  height: fit-content;
  border-radius: 5%;
  border: 5px solid #6bd1ff;
  background: #03122f;

  @media (min-width: 375px){
    width: 80%;
  }
`;

const MZNuevoVideo = () => {

  const { closeModal , registrarVideo} = useContext(AppContext);

  const [titulo, nuevoTitulo] = useState("");
  const [categoria, actualizarCategoria] = useState("");
  const [imagen, nuevaImagen] = useState("");
  const [video, nuevoVideo] = useState("");
  const [descripcion, nuevaDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      titulo,
      categoria,
      imagen,
      video,
      descripcion,
    };
    registrarVideo(datosAEnviar, categoria);
  };

  const eliminarDatos = (e) => {
    e.preventDefault();
    nuevoTitulo("");
    actualizarCategoria("");
    nuevaImagen("");
    nuevoVideo("");
    nuevaDescripcion("");
  };

  return (
    <>
      <Overlay />
      <DialogEstilizado open={true} className={styles.modal}>
        <div className={styles.contenedor}>
          <BotonIcono onClick={closeModal}>
            <img src="/iconos/iconoCerrar.png" alt="Icono de cerrar" />
          </BotonIcono>
          <div className={styles.titulos}>
            <h2>Nuevo Video</h2>
            <h4>
              Complete el formulario para <br/>crear una nueva tarjeta de video
            </h4>
          </div>
          <form>
            <h3>Crear Tarjeta</h3>
            <CampoTexto
              titulo="Titulo"
              placeholder="Escribe aquí el título del video"
              required
              valor={titulo}
              actualizarValor={nuevoTitulo}
            />
            <ListaOpciones
              valor={categoria}
              actualizarCategoria={actualizarCategoria}
            />
            <CampoTexto
              titulo="Imagen"
              placeholder="Ejemplo: https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps"
              required
              valor={imagen}
              actualizarValor={nuevaImagen}
            />
            <CampoTexto
              titulo="Video"
              placeholder="Ejemplo: https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap"
              required
              valor={video}
              actualizarValor={nuevoVideo}
            />
            <CampoTexto
              titulo="Descripción"
              placeholder="Ejemplo: Lorem ipsum"
              required
              valor={descripcion}
              actualizarValor={nuevaDescripcion}
            />
            <div className={styles.botones}>
              <button className={styles.botonForm} onClick={handleSubmit}>
                Guardar
              </button>{" "}
              {/* Crea la funcionalidad de Guardar */}
              <button className={styles.botonForm} onClick={eliminarDatos}>
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </DialogEstilizado>
    </>
  );
};

export default MZNuevoVideo;

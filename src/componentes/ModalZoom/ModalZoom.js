import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import BotonIcono from "../BotonIcono/BotonIcono";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import styles from "../ModalZoom/ModalZoom.module.css";

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
  top:294px;
  width: 50%;
  height: fit-content;
  border-radius: 5%;
  border: 5px solid #6BD1FF;
  background: #03122F;

  @media (min-width: 375px) {
    width: 80%; 
    border-radius: 5%;
  }
`;


const ModalZoom = ({editarVideo, video}) => {
  const { closeModal } = useContext(AppContext);

  const [titulo, actualizarTitulo] = useState("");
  const [categoria, actualizarCategoria] = useState("Front End");
  const [imagen, actualizarImagen] = useState("");
  const [videoUrl, actualizarVideo] = useState("");
  const [descripcion, actualizarDescripcion] = useState("");
  const [alertaVisible, setAlertaVisible] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      id: video.id,
      titulo,
      categoria,
      imagen,
      video:videoUrl,
      descripcion,
    };
    editarVideo(datosAEnviar, video.id);

    setAlertaVisible(true);

    setTimeout(() =>{
      console.log("Ocultar alerta");
      setAlertaVisible(false);
    }, 5000);
  };

  const eliminarDatos = (e) =>{
    e.preventDefault();
    actualizarTitulo("");
    actualizarCategoria("");
    actualizarImagen("");
    actualizarVideo("");
    actualizarDescripcion("");
  }

  return (
    <>
      <Overlay />
      <DialogEstilizado open={true} className={styles.modal}>
        <BotonIcono onClick={closeModal}>
          <img src="/iconos/iconoCerrar.png" alt="Icono de cerrar"/>
        </BotonIcono>
        <h2 className={styles.titulo}>Edita el video</h2>
        <form className={styles.editarVideo}onSubmit={handleSubmit}>
          <CampoTexto
            titulo="Titulo"
            placeholder="Escribe aquí el título del video"
            required
            valor={titulo}
            actualizarValor={actualizarTitulo}
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
            actualizarValor={actualizarImagen}
          />
          <CampoTexto
            titulo="Video"
            placeholder="Ejemplo: https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap"
            required
            valor={videoUrl}
            actualizarValor={actualizarVideo}
          />
          <CampoTexto
            titulo="Descripción"
            placeholder="Ejemplo: Lorem ipsum"
            required
            valor={descripcion}
            actualizarValor={actualizarDescripcion}
          />
          <div className={styles.botonesEditar}>
            <button className={styles.botonForm} onClick={handleSubmit}>Guardar</button> {/* Crea la funcionalidad de Guardar */}
            <button className={styles.botonForm} onClick={eliminarDatos}>Limpiar</button> 
          </div>
        </form>
        {alertaVisible && (
            <Stack sx={{ 
              width: { xs: '90%', sm: '70%', md: '38%' }, 
              backgroundColor: 'white', 
              color: 'black',
              borderColor: 'black',
              marginLeft: { xs: '5%', sm: '15%', md: '220px' },
              borderRadius: '10px',
              }} spacing={2}>
              <Alert variant="outlined" severity="info">Video editado correctamente</Alert>
            </Stack>
          )};
      </DialogEstilizado>
    </>
  );
};

export default ModalZoom;

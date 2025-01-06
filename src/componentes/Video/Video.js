import React from "react";
import styles from "./Video.module.css";

const Video = ({ openModal, datos , openEditModal, eliminarVideo}) => {
  const { titulo, imagen, video } = datos;

  const handleEditClick = () => {
    openEditModal(datos);
  };

  const getEmbedUrl = (url) => {
    if (!url.includes("youtube.com")) return url; // Si no es de YouTube, retorna la URL original
    return url.replace("watch?v=", "embed/");
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.encabezado}>
        <iframe
          className={styles.videoPrincipal}
          src={getEmbedUrl(video)}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.botones}>
        <button className={styles.botonEliminar}
        onClick={() => eliminarVideo(datos.id)}>
          <img
            className={styles.iconos}
            src="/iconos/iconoBasurero.png"
            alt="Icono de borrar"
          />
          <p>Eliminar</p>
        </button>
        <button className={styles.botonEditar} onClick={handleEditClick}>
          <img
            className={styles.iconos}
            src="/iconos/iconoEditar.png"
            alt="Icono de editar"
          />
          <p>Editar</p>
        </button>
      </div>
    </div>
  );
};

export default Video;

//import { useOutletContext } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../../App";
import Video from "../Video/Video";
import styles from "./Genero.module.css";

const Genero = ({ datos }) => {
  //Destructuración
  const { colorPrimario, colorSecundario, titulo} = datos;
  const { videos, eliminarVideo } = useContext(AppContext);
  const { openEditModal } = useContext(AppContext);

  const videosFiltrados = videos.filter((video) => video.categoria === titulo);
  
  console.log(videos.length > 0);
  
  return<>
   {
      videos.length > 0 &&
      <section
        className={styles.genero}
        style={{ backgroundColor: colorPrimario }}
      >
        <h3 style={{ borderColor: colorSecundario }}>{titulo}</h3>
        <div className={styles.videos}>
          {videosFiltrados.map((video) => (
            <Video key={video.id} datos={video} openEditModal={openEditModal} eliminarVideo={eliminarVideo}/>
          ))}
        </div>
      </section>
    } 
  </>
};

export default Genero;

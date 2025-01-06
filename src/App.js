import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "../src/componentes/Banner/Banner";
import Cargando from "../src/componentes/Cargando/Cargando";
import Genero from "../src/componentes/Genero/Genero";
import Header from "../src/componentes/Header/Header";
import ModalZoom from "../src/componentes/ModalZoom/ModalZoom";
import MZNuevoVideo from "../src/componentes/ModalZoomNuevoVideo/MZNuevoVideo";
import Pie from "../src/componentes/Pie/Pie";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [isModalOpen, setModalOpen] = useState(null);
  const [videoEdit, setVideoEdit] = useState(null);
  const [videos, actualizarVideos] = useState([]);
  // const [videoDeGenero, setVideoDeGenero] = useState([]);

  const generos = [
    {
      id: 1,
      titulo: "Front End",
      colorPrimario: "#3E399D",
      colorSecundario: "#554ED8",
    },
    {
      id: 2,
      titulo: "Back End",
      colorPrimario: "#5C59AA",
      colorSecundario: "#ffff",
    },
    {
      id: 3,
      titulo: "Innovación y gestión",
      colorPrimario: "#2420A7",
      colorSecundario: "#312BE0",
    }
  ];

  const registrarVideo = (datos, categoria) => {
    if (!generos.find((g) => g.titulo === categoria)) {
      console.error(`Categoría no válida: ${categoria}`);
      return;
    }
    //Spread operator
    const nuevoVideo = {...datos, id: videos.length + 1, categoria};
    actualizarVideos([...videos, nuevoVideo]);
    alert(`Video ${datos.titulo} registrado con éxito en la categoría ${categoria}. Puedes agregar un nuevo video o volver al Inicio`);
  };

  const openEditModal = (videoData) => {
    setVideoEdit(videoData);
    setModalOpen('zoom');
  };

  const editarVideo = (datos, id) => {
    const videoEditado = videos.map((video) => {
      if (video.id === id) {
        return {...video, ...datos};
      }
      return video;
    });
    actualizarVideos(videoEditado);
  }

  const eliminarVideo = (id) => {
    const videosActualizados = videos.filter((video) => video.id !== id);
    actualizarVideos(videosActualizados);
  }

  const contextValue = {
    openZoomModal: () => setModalOpen('zoom'),
    openNuevoVideoModal: () => setModalOpen('nuevoVideo'),
    closeModal: () => setModalOpen(false),
    openEditModal,
    generos,
    registrarVideo,
    editarVideo,
    eliminarVideo,
    videos
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://my-json-server.typicode.com/JonSaraviaZ/alura-flix-api/db');
        
        // Verificar si la respuesta fue exitosa
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        // Parsear el JSON
        const data = await res.json();
  
        console.log(data); // Verifica que el objeto recibido sea correcto
        actualizarVideos(data.videos || []); // Usa un valor por defecto si data.videos no existe
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Simular el retardo
    setTimeout(() => getData(), 4000);
  }, []);
  

  return (
    <AppContext.Provider value={contextValue}>
      <main>
        <Header />
        <Banner img="ImgBanner" color="#154580"></Banner>
        {videos.length === 0 ? (
        <Cargando />
        
        ) : (
          generos.map((genero) => (
            <Genero
              datos={genero}
              key={genero.id}
              titulo={genero.titulo}
              colorPrimario={genero.colorPrimario}
              colorSecundario={genero.colorSecundario}
              videos={videos.filter((video) => video.categoria === genero.titulo)}
            />
          ))
        )}
        <Outlet context={contextValue}/>
        {isModalOpen === 'zoom' && <ModalZoom
        video={videoEdit} editarVideo={editarVideo}
        />}
        {isModalOpen === 'nuevoVideo' && <MZNuevoVideo
        registrarVideo={registrarVideo}/>}
        <Pie />
      </main>
    </AppContext.Provider>
  );
}

export default App;

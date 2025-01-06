import styles from './Banner.module.css';

function Banner({img, color}){
    return (
        <div className={styles.capa} style={{backgroundImage: `url("/img/${img}.png")`}}>
            <div className={styles.gradient} style={{background: `${color}`}}>
                <h1 className={styles.titulo}>Bienvenidos a la plataforma <br />de videos AluraFlix</h1>
                <p className={styles.subtitulo}>Aquí podrás ver, guardar y <br/>categorizar los videos del área TI que desees.</p>
                <div>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=IBseaAp6q-s8VSuH" title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Banner;
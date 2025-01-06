import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import styles from "./Header.module.css";

function Header() {
  const { openNuevoVideoModal } = useContext(AppContext);

  return (
    <header className={styles.cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src="/img/LogoAluraFlix.png" alt="Logo Alura" />
        </section>
      </Link>
      <nav>
        <a href="/"><button className={styles.boton}>Home</button></a>
        <button onClick={openNuevoVideoModal} className={styles.boton}>Nuevo Video</button>
      </nav>
    </header>
  );
}

export default Header;

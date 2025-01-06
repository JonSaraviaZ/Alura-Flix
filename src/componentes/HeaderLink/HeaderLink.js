import { Link } from "react-router-dom";
import styles from './HeaderLink.module.css';

function Headerlink({to, children}){
    return(
        <Link to={to} className={styles.link}>
            {children}
        </Link>
    )
}

export default Headerlink;
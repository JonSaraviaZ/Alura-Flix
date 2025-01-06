import { Link } from 'react-router-dom';
import styles from './HeaderLinkNV.module.css';

function HeaderLinkNV({to, children}){
    return(
        <Link to={to} className={styles.link} >
            {children}
        </Link>
    )
}

export default HeaderLinkNV;
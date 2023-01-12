import { useContext } from "react";
import Link from "next/link";
import styles from '../styles/Components.module.css'
import AuthContext from '../context/AuthContext'
import { useAuthUser } from '../hooks/useAuthUser'

function Navbar() {
    useAuthUser();
    const { isLogged } = useContext(AuthContext);
    return (
        <nav className={styles.nav_main}>
            <div className={styles.container_fluid}>
                <div className={styles.nav_item}>
                    <Link href="/"><h5>Inicio</h5></Link>
                </div>
                {isLogged === false && (
                    <div className={styles.nav_item}>
                        <Link href="/login"><h5>Iniciar Sesión</h5></Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
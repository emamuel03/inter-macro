import Link from "next/link";
import styles from '../styles/Components.module.css'


function Navbar() {
    return (
        <nav className={styles.nav_main}>
            <div className={styles.container_fluid}>
                <div className={styles.nav_item}>
                    <Link href="/"><h5>Inicio</h5></Link>
                </div>
                <div className={styles.nav_item}>
                    <Link href="/login"><h5>Iniciar Sesión</h5></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
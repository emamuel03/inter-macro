import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import styles from '../styles/Components.module.css'
import AuthContext from '../context/AuthContext'
import { useAuthUser } from '../hooks/useAuthUser'
import { signOut } from 'firebase/auth'
import { auth } from "../firebase";

function Navbar() {
    useAuthUser();
    const { isLogged } = useContext(AuthContext);
    const [current, setCurrent] = useState();

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      auth.onAuthStateChanged((u)=>{
        setCurrent(u)
      })
    }, [])  
    
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
                 {isLogged === true && (
                    <>
                    <div className={styles.nav_item}>
                        <Link href="/login"><h5>{current.email}</h5></Link>
                    </div>
                    <button onClick={logOut}>Cerrar Sesión</button>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar
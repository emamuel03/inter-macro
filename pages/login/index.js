import styles from '../../styles/Logger.module.css'
import React from 'react'

export default function Login() {

    const changeUser = () => {

    }
    return (<div className={styles.main}>
        <div className={styles.main_content}>
            <h1>Iniciar Sesión</h1>
            <div className={styles.form}>
                <div className={styles.input_label}>
                    <p>Usuario</p>
                    <input
                        id='userName'
                        type='text'
                        placeholder='Usuario'
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Contraseña</p>
                    <input
                        id='password'
                        type='password'
                        placeholder='Contraseña'
                        onChange={changeUser}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

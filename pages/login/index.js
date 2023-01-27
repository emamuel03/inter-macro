import styles from '../../styles/Logger.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import Notification from '../../components/Notification';

export default function Login() {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [Message, setMessage] = useState("");
    const [ShowNotification, setShowNotification] = useState(false);

    const showMessage = (message) => {
        setMessage(message);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false)
        }, 2800);
    }

    const { push } = useRouter();

    const changeUser = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        console.log(credentials.email);
    }

    const loginUser = async() => {
        try {
            await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
            push("/");
        } catch (message) {
            console.log(message)
            if(message === "FirebaseError: Firebase: Error (auth/wrong-password)." ){
                showMessage("Contraseña Incorrecta")
            }
        }
    }


    return (<div className={styles.main}>
        <Notification show={ShowNotification} message={Message} />
        <div className={styles.main_content}>
            <h1>Iniciar Sesión</h1>
            <div className={styles.form}>
                <div className={styles.input_label}>
                    <p>Correo Electrónico</p>
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        autoComplete='off'
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Contraseña</p>
                    <input
                        name='password'
                        type='password'
                        placeholder='Contraseña'
                        onChange={changeUser}
                    />
                </div>
                <button onClick={loginUser}>
                    Iniciar
                </button>
            </div>
        </div>
    </div>
    )
}

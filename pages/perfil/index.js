import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase.config';
import styles from '../../styles/Logger.module.css';

export default function Perfil() {

    const [current, setCurrent] = useState({
        email: "",
        password: "",
        repassword: "",
        firstname: "",
        lastname: "",
        department: "",
        role: "",
    });

    const { push } = useRouter();

    const changeUser = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
      auth.onAuthStateChanged((u)=>{
        const docref = doc(db,"user",u.uid)
        getDoc(docref).then((c)=>{
          setCurrent(c.data())
        })
      })
    }, [])
    

    return (<div className={styles.main}>
        <div className={styles.main_content}>
            <h1>¡Hola {current.firstname}!</h1>
            <div className={styles.form}>
                <div className={styles.input_label}>
                    <p>Correo Electrónico</p>
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={current.email}
                        readOnly
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Nombre</p>
                    <input
                        name='firstname'
                        type='text'
                        placeholder='Nombre'
                        value={current.firstname}
                        readOnly
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Apellido</p>
                    <input
                        name='lastname'
                        type='text'
                        placeholder='Apellido'
                        value={current.lastname}
                        readOnly
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Departamento</p>
                    <input
                        name='department'
                        type='text'
                        placeholder='Departamento'
                        value={current.department}
                        readOnly
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Rol</p>
                    <input
                        name='role'
                        type='text'
                        placeholder='Rol'
                        value={current.role}
                        readOnly
                        onChange={changeUser}
                    />
                </div>
                {/* <button onClick={createUser}>
                    Crear Usuario
                </button> */}
            </div>
        </div>
    </div>
    )
}


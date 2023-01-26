import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, Firestore, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { auth, db } from '../../firebase.config';
import styles from '../../styles/Logger.module.css';

export default function Register() {

    const [credentials, setCredentials] = useState({
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

    const createUser = async () => {
        try {
            if(credentials.password === credentials.repassword){
                const {user} = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
                    .then((user) => {
                        return user
                    });
                const docuRef = await doc(db,`user/${user.uid}`)
                setDoc(docuRef,{
                    email: credentials.email,
                    firstname: credentials.firstname,
                    lastname: credentials.lastname,
                    department: credentials.department,
                    role: credentials.role,
                })
                
            }else {
                console.log("las contraseñas no coinciden");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (<div className={styles.main}>
        <div className={styles.main_content}>
            <h1>Registrar Usuario</h1>
            <div className={styles.form}>
                <div className={styles.input_label}>
                    <p>Correo Electrónico</p>
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
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
                <div className={styles.input_label}>
                    <p>Repetir Contraseña</p>
                    <input
                        name='repassword'
                        type='password'
                        placeholder='Repetir Contraseña'
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Nombre</p>
                    <input
                        name='firstname'
                        type='text'
                        placeholder='Nombre'
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Apellido</p>
                    <input
                        name='lastname'
                        type='text'
                        placeholder='Apellido'
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Departamento</p>
                    <input
                        name='department'
                        type='text'
                        placeholder='Departamento'
                        onChange={changeUser}
                    />
                </div>
                <div className={styles.input_label}>
                    <p>Rol</p>
                    <input
                        name='role'
                        type='text'
                        placeholder='Rol'
                        onChange={changeUser}
                    />
                </div>
                <button onClick={createUser}>
                    Crear Usuario
                </button>
            </div>
        </div>
    </div>
    )
}

import React, { useEffect, useContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'
import { useRouter } from 'next/router'
import AuthContext from '../context/AuthContext'

export const useAuthUser = () => {
    const { push, pathname } = useRouter();
    const {setIsLogged} = useContext(AuthContext)
  return (
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        let userLogger = user === null ? false : true;

        if(!userLogger) {
            push("/login");
            setIsLogged(false)
        }else{
            setIsLogged(true)
            if(pathname === "/login"){
                push("/")
            }
        }
      });

    }, [])
    
  );
}


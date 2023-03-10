import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const docRef = doc(db, "user", "99CW6uj9kuhCUoyHSJuM")

  useEffect(() => {
    getDoc(docRef).then((u)=>{
      console.log(u.data());
    }).catch((err)=>{
      console.log(err)
    })
    
  }, [])
  
  return (
    <>
      <Head>
        <title>Macropharma - Intranet</title>
        <meta name="description" content="Generated by Emmanuel Gómez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
      </main>
    </>
  )
}

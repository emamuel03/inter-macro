import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ContextAuthProvider } from '../context/AuthContext'

export default function App({ Component, pageProps }) {
  return <>
    <ContextAuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </ContextAuthProvider>
  </>
}

import NavBar from '../components/navBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* header */}
      <NavBar/>
      {/* aside */}
      <Component {...pageProps} />
      {/* footer */}

    </>

  )
}

export default MyApp

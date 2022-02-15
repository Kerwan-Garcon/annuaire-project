import { AppContextProvider } from "../src/components/appContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      {" "}
      <Component {...pageProps} />{" "}
    </AppContextProvider>
  )
}

export default MyApp

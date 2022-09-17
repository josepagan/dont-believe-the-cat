import '../styles/globals.css'
import { Provider } from 'react-redux'
import getStore from '../store/store'
import NavBar from '../components/NavBar';


function MyApp({ Component, pageProps }) {
  console.log("pageprops from _app.js", pageProps)
  if (!pageProps.initialState) console.log("MATE YOU FORGOT TO PASS THE STORE TO THIS PAGE")
  const clientStore = getStore(pageProps.initialState)
  return (
    <>
      <Provider store={clientStore}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}


export default MyApp

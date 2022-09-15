import App from 'next/app';
import '../styles/globals.css'
import { Provider } from 'react-redux'
import getStore from '../store/store'
import NavBar from '../components/NavBar';
import { store } from '../store/store';


function MyApp({ Component, pageProps }) {
  console.log("pageprops from _app.js", pageProps)
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

import App from 'next/app';
import '../styles/globals.css'
import { Provider } from 'react-redux'
import {initializeStore}from '../store/store'
import NavBar from '../components/NavBar';


function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <Provider store={undefined}> */}
      <NavBar />
      <Component {...pageProps} />
    {/* </Provider> */}
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  //here we initialise the store
  const reduxStore = initializeStore({})

  appProps.pageProps = {
    ...appProps.pageProps,
    initialReduxState: reduxStore.getState(),
    shittyValue: "Shit!"
  }

  return { ...appProps }
}

//TODO try to figure outwhy this block gives me top level await experiment error, compare with the block in 
//the next.js _app documentation page: https://nextjs.org/docs/advanced-features/custom-app


// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   //initialise redux store on server side
//   const reduxStore = initialiseStore({});
//   const { dispatch } = reduxStore;
//   const res = await   fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()  
//   dispatch(setStars({ stars: json.stars }));

//   appProps.pageProps = {
//     ...appProps.pageProps,
//     initialReduxState: reduxStore.getState(),
//   };

//   return appProps;
// };


export default MyApp

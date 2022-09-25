// import Head from 'next/head'
// import Image from 'next/image'
import { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import NavBar from '../components/NavBar';
import initialiseStore from "../store/store";

// import styles from '../styles/Home.module.css'

export default function Home(props) {

  // useEffect(() => { console.log("Hello from the client side") }, [])
  return (
    <>
      <h1>Don't believe the cat</h1>

      <div>{JSON.stringify(props)}</div>

    </>
  )
}

//TODO add here fetchusers (maybe using ssr??? OMG)

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const reduxStore = initialiseStore()

  return { props: {initialState:reduxStore.getState()} }
}


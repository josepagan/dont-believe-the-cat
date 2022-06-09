// import Head from 'next/head'
// import Image from 'next/image'
import { useEffect } from "react";
import NavBar from '../components/NavBar';
import fetchUsers from '../features/users/usersSlice'

// import styles from '../styles/Home.module.css'

export default function Home() {

  // useEffect(() => { console.log("Hello from the client side") }, [])
  return (
    <>
      <h1>Don't believe the cat</h1>
    </>
  )
}

//add here fetchusers (maybe using ssr??? OMG)
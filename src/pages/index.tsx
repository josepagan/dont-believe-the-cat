import { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import NavBar from '../components/NavBar';
import { wrapper } from "../store/store";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

export default function Home() {
  // const dispatch = useDispatch()
  // dispatch(fetchUsers())
  return (
    <>
      <h1>Don't believe the cat</h1>
    </>
  )
}


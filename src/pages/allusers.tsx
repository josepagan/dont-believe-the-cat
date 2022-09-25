import { GetServerSideProps } from "next"
import { useEffect } from "react";
import { fetchUsers } from "../features/users/usersSlice";
import initialiseStore from "../store/store";

//TODO this is really just a demo to get something into redux, not very realistic to keep this page

interface User {
  id: number;
  name: string;
  email: string;
  homeId?: number | null; 
}
interface AllUsersProps {
  users: User[]
}
export default function AllUsers(props) {
  useEffect(()=>{console.log("hello from the client")})
//TODO i have to actually impement picking data from the store and see if the hydration actually happens
  return (
    //
    <>
      <h1>OMG</h1>
      <div>{JSON.stringify(props)}</div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const reduxStore = initialiseStore()
  await reduxStore.dispatch(fetchUsers())

  return { props: {initialState:reduxStore.getState()} }
}
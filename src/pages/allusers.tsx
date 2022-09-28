import { GetServerSideProps } from "next"
import { useEffect } from "react";
import { fetchUsers } from "../features/users/usersSlice";
import { wrapper } from "../store/store";

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
export default function AllUsers(users) {
  useEffect(()=>{console.log("hello from the client")})
//TODO i have to actually impement picking data from the store and see if the hydration actually happens
  return (
    //
    <>
      <h1>OMG</h1>
      <div>{JSON.stringify(users)}</div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
  // console.log(cStx)
await store.dispatch(fetchUsers())
  console.log("is this running at all?")
  return {props: {}}
})
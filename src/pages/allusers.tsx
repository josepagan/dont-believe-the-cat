import { GetServerSideProps } from "next"
import { getAllUsersDB } from "./api/users"
import {initializeStore} from "../store/store"


interface User {
  id: number;
  name: string;
  email: string;
  homeId?: number | null;
}
interface AllUsersProps {
  users: User[]
}
export default function AllUsers({ users }: AllUsersProps) {

  return (
    <>
      <h1>OMG</h1>
      <div>{JSON.stringify(users)}</div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users: User[] = await getAllUsersDB()

  const reduxStore = initializeStore({})
  const {dispatch} = reduxStore
  dispatch()


  return { props: {users} }
}

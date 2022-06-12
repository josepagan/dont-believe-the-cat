import { GetServerSideProps } from "next"
import { useDispatch } from "react-redux"
import { getAllUsersDB } from "./api/users"

import type { AppDispatch } from '../store/store'

interface Users {
}

//TODO implement users type grrrr
export default function AllUsers({users}) {

  const dispatch: AppDispatch = useDispatch()
  
  return (
    <>
      <h1>OMG</h1>
      <div>{JSON.stringify(users)}</div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await getAllUsersDB()
  return { props: { users } }

}

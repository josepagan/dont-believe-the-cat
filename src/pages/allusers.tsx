import { GetServerSideProps } from "next"
import {fetchUsers} from "../features/users/usersSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import type { AppDispatch } from '../store/store'




export default function AllUsers() {
console.log("does this work?")
const dispatch: AppDispatch = useDispatch()
const handleDispatch = () => {
  console.log("button clicked")
  dispatch(fetchUsers())
}
// useEffect(()=>{
//   dispatch(fetchUsers)
// },[])
  return (
    <>
	    <h1>OMG</h1>
      <button onClick={handleDispatch}>dont click</button>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {

// 	return {props: {users}} 

// }

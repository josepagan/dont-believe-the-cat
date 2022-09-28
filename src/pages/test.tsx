import { GetServerSideProps } from "next"
import { wrapper } from "../store/store"

export default function ({allUsers}) {
    return (
      <>
        <h1>this is just a test page, where is my store baby?</h1>
        <p>{JSON.stringify(allUsers)}</p>
      </>
    )
  }

  export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    // console.log(cStx)
  const allUsers = store.getState().user.allUsers
    console.log("is this running at all? Allusers:", allUsers) 
    return {props: {allUsers}}
  })
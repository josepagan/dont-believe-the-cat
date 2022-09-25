import { GetServerSideProps } from "next"
import { useState } from "react"
import { addUser } from "../features/users/usersSlice"
import initialiseStore, { useAppDispatch } from "../store/store"

//TODO implement some sort of validation mavybe using yup. read about yup
export default function NewUserFormPage() {
    const dispatch = useAppDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [showJoinHome, toggleJoinHome] = useState(false)
    const [existingHomeId, setExistingHomeId] = useState(null)

    const handlesubmit = (e) => {
        console.log(e)
        dispatch(addUser())
        e.preventDefault()
    }

    return (
        <>
            <h1>NewUserFormPage here</h1>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    value={email}
                    placeholder="Name..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={name}
                    placeholder="email..."
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const reduxStore = initialiseStore()
    return { props: {initialState:reduxStore.getState()} }
  }
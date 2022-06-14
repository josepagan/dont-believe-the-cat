import { useState } from "react"
//TODO implement some sort of validation mavybe using yup. read about yup
export default function NewUserFormPage() {
    const [name, setName] = useState("...")
    const [email, setEmail] = useState("...")
    const [showJoinHome, toggleJoinHome] = useState(false)
    const [existingHomeId, setExistingHomeId] = useState(null)

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <>
            <h1>NewUserFormPage here</h1>
            <form onSubmit={handlesubmit}>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
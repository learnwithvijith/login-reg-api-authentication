import { useState } from "react"

const AuthForm = ({ fName, onSubmitHandler }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSUbmit = (e)=>{
        e.preventDefault()
        onSubmitHandler({name,email,password})

    }


    return (
        <form onSubmit={handleSUbmit}>
            {fName &&
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            }
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit"> Submit </button>
        </form>

    )
}
export default AuthForm
import { useNavigate } from "react-router-dom"
import { login } from "../api/auth"
import AuthForm from "../components/AuthForm"

const Login = ()=>{
    const navigate = useNavigate()

     const onSubmitHandler = async(data)=>{
            try{
                const response = await login(data)
                console.log(response,"Registeration Successfull")
                localStorage.setItem('token',response?.token)
                navigate('/profile')
    
            }catch(error){
                console.log(error)
            }
        }
    return(
        <>
        <h2>Login</h2>
        <AuthForm fName={false} onSubmitHandler={onSubmitHandler}/>
        </>
    )
}

export default Login
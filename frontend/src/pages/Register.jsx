import { register } from "../api/auth"
import AuthForm from "../components/AuthForm"

const Register = ()=>{

    const onSubmitHandler = async(data)=>{
        console.log(data,'dataone')
        try{
            const response = await register(data)
            console.log(response,"Registeration Successfull")

        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <h2>Register</h2>
        <AuthForm fName={true} onSubmitHandler={onSubmitHandler}/>
        </>
    )
}

export default Register
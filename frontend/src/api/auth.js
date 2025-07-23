import axios from "axios"


const API_URL = `http://localhost:8000/api/users`


export const register = async(userData)=>{

    const res = await axios.post(`${API_URL}/register`,userData)
    return res.data
}

export const login = async(userData)=>{

    const res = await axios.post(`${API_URL}/login`,userData)
    return res.data
}

export const getProfile = async()=>{
    const token = localStorage.getItem('token')
    const res = await axios.get(`${API_URL}/profile`,{
        headers:{
            Authorization : `Bearer ${token}`
        }
    }) 
    return res.data
}



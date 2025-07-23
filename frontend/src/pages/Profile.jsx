import { useEffect, useState } from "react"
import { getProfile } from "../api/auth"

const Profile =()=>{

    const [profile,setProfile] = useState()

    const fetchProfile = async()=>{
        try{
            const data = await getProfile()
            setProfile(data)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchProfile()

    },[])

    console.log(profile?.user?.name,'pro')

    return(
        <>
        <h2>Profile</h2>
        {/* <h3>{profile.user.name}</h3>
          <h3>{profile.user.email}</h3> */}
          <h3>{profile?.user?.name}</h3>
           <h3>{profile?.user?.email}</h3>
        </>
    )
}

export default Profile
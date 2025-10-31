import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute=({isAuth})=>{
    //  console.log('protected',isAuth)
    useEffect(()=>{

        console.log("mounterd", isAuth)
    },[])

    if(!isAuth){
        return <Navigate to='/login'/>
    }
   
    return <Outlet/>
}



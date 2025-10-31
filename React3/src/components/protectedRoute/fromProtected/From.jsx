import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLogin } from "./Login";

export const From=()=>{
    const[userIsLogin,setIsLogin]=useState('false');

    const handleLogin=(event)=>{
        event.preventDefault();
        setIsLogin(event.target.value);
}
    const handleLogout=()=>{

    }

    return(
        <>
<BrowserRouter>
<Routes>
    <Route path="/login" element={<UserLogin handleLogin= { handleLogin}/>}/>
</Routes>
</BrowserRouter>
    
        </>
    )
}
import { useNavigate } from "react-router-dom";

export const Login=({onLogin,isAuth})=>{
    const navigate=useNavigate();

    return(
        <>
        <h1>Login</h1>
        <button onClick={()=>{
            onLogin()

       navigate('/dashboard')
            }}>login</button>


             <button onClick={()=>{
       

       navigate('/home')
            }}>HOME</button>
        
        </>
    )
}
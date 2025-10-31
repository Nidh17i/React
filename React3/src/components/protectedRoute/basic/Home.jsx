import { useNavigate } from "react-router-dom";

export const Home=({onLogout})=>{
        const navigate=useNavigate();
    const handleLogoutClick = () => {
        onLogout()
        navigate('/')
    }
    return(
        <>
        <h1>Welcome to Home page</h1>
        <button onClick={onLogout}>Logout</button>
        </>
    )
}
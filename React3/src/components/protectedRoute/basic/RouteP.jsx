import {Routes,Route, BrowserRouter, useNavigate} from 'react-router-dom'
import { Login } from './Login';
import { Home } from './Home';
import { Dashboard } from './Dashboard';
import { ProtectedRoute } from './protectedRoute';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';
export const RouteP=()=>{
    const {isLogin, handleLogin,  handleLogout} = useLogin()
    // const[isLogin,setLogin]=useState(false)

    // const navigate=useNavigate();
    
    
    
    // const handleLogin=()=>{
        //     setLogin(true)
        // //    navigate('/home')
        // }
        // const handleLogout=()=>{
            //     setLogin(false)
            
            // }
            console.log(isLogin);
    return(
        <>
        <BrowserRouter>
  <Routes>
        // public url
        <Route path='/login' element={<Login onLogin={handleLogin}/>} />

        // Protected url
       


       <Route element={<ProtectedRoute isAuth={isLogin}/>}>

       <Route  path='/home' element={<Home onLogout={handleLogout}/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
    </Route>

    </Routes>
        </BrowserRouter>

        </>
    )
}

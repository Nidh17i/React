import { useState } from "react"

 export const LoginForm=()=>{
    const [login,SetLogin]=useState({
      username:'',
      password:''
    })
    const handleInput=(e)=>{
        const{name,value}=e.target;
        SetLogin((prev)=>({...prev,[name]:value}));
         

    }
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(login);

    }

    return(
        <div style={{border:'2px solid black', height:'40vh',width:'70vh', textAlign:'center', margin:'25vh'}}>
            <form onSubmit={handleForm}>
                <h1>Login Form</h1>
                <label htmlFor="username"><b>UserName</b></label>
                <input 
                type='text'
                 id="username" 
                 name="username"
                 value={login.username}
                 onChange={handleInput}
                 style={{ margin:'2vh',borderRadius:'0.5vh', height:'20px',width:'150px'}}/>
                <br/><br/>
               <label htmlFor="password"><b>PassWord</b></label>
               <input 
               type='text' 
               id="password" 
               name="password"
               value={login.password}
               onChange={handleInput}
               style={{margin:'2vh' ,borderRadius:'0.5vh', height:'20px',width:'150px'}}/>
               <br/><br/>
               <button  type="submit"style={{borderRadius:'1vh', height:'30px',width:'50px'}}>Login</button>
            </form>
        </div>
    )

}
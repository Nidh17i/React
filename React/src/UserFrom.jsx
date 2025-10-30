import React, { useRef, useState } from 'react'
import { UserContext } from './UserProvider';

export default function UserFrom() {

    const[users,dispatch]=useContext(UserContext);

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const roleRef=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const newUser={
            id:Math.floor(Math.random()*1000000),
            name,
            email,
            role:roleRef.current.value
        }
        if(id){
            dispatch({type:'updateUser',payload:newUser});
            
        }
        else{
            dispatch({type:'addUser',payload:newUser})
        }

    }

  return (
    <div>
        
        <form onSubmit={handleSubmit} >
            <h2>{id ? 'Edituser':"AddUser"}</h2>
            <input type="text"
            placeholder='Enter Name'
            value={name}
            onChange={(event)=>setName(event.target.value)}
            required
            />
            <br/><br/>
              <input type="text"
            placeholder='Enter Email'
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            required
            />
            <br/><br/>
            <select ref={roleRef}>
            <option value=''>select role</option>
             <option value='Fronted'>Fronted</option>
              <option value='Backend'>Backend</option>
               <option value='Full Stack'>Full Stack</option>
            </select>
            <br/><br/>
            <button >submit</button>
        </form>

    </div>
  
  )
}

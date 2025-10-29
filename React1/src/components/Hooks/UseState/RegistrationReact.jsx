import { useState } from "react";
 export const RegistrationReact=()=>{
    const[user,setUser]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        pnumber:'',
    });
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        console.log(user)

        
        
    }


    const handleInput=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}))
       
    }
    return(
        <div style={{border:'2px solid black', height:'70vh',width:'70vh', textAlign:'center'}} >
         <h1>Registation from</h1>
         <form onSubmit={handleSubmit}>
         <label htmlFor="firstname"><b>First Name  </b></label>
         <input 
         type="text"
         placeholder="Enter FirstName"
         name="firstname"
         id="firstname"
         value={user.firstname}
         onChange={handleInput}
        />
        <br/><br/>
        <label htmlFor="lastname"><b>Last Name  </b></label>
         <input 
         type="text"
         placeholder="Enter LastName"
         name="lastname"
         id="lastname"
         value={user.lastname}
         onChange={handleInput}
        />
        <br/><br/>
        <label htmlFor="email"><b> Email </b></label>
         <input 
         type="text"
         placeholder="Enter Email"
         name="email"
         id="email"
         value={user.email}
         onChange={handleInput}
        />
        <br/><br/>
        <label htmlFor="password"><b>PassWord </b></label>
         <input 
         type="password"
         placeholder="Enter Passward"
         name="password"
         id="password"
         value={user.password}
         onChange={handleInput}
        />
        <br/><br/>
        <label htmlFor="pnumber"><b>Phone Number  </b></label>
         <input 
         type="phone"
         placeholder="Enter PhoneNumber"
         name="pnumber"
         id="pnumber"
         value={user.phone}
         onChange={handleInput}
        />
        <br/><br/>

        <button>Register</button>
        </form>
        </div>
    )

}
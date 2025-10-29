import { useState } from "react"

 export const Form=()=>{
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[PhoneN,setPhoneN]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const fromData={
            firstname,lastname,email,password,PhoneN
        }
        console.log(fromData)

        
        
    }


    const handleInput=(e)=>{
        const {name,value}=e.target;
        switch(name){
            case 'firstname': 
            setFirstName(value);
            break;
            case 'lastname': 
            setLastName(value);
            break;
            case 'email': 
            setEmail(value);
            break;
            case 'password': 
            setPassword(value);
            break;
            case 'pnumber': 
            setPhoneN(value);
            break;
        }

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
         value={firstname}
         onChange={handleInput}
        />
        <br/><br/>
        <label htmlFor="lastname"><b>Last Name  </b></label>
         <input 
         type="text"
         placeholder="Enter LastName"
         name="lastname"
         id="lastname"
         value={lastname}
         onChange={handleInput}
        />
        <br/><br/>
        <label htmlFor="email"><b> Email </b></label>
         <input 
         type="text"
         placeholder="Enter Email"
         name="email"
         id="email"
         value={email}
         onChange={handleInput}
        />
        <br/><br/>
        <label htmlFor="password"><b>PassWord </b></label>
         <input 
         type="password"
         placeholder="Enter Passward"
         name="password"
         id="password"
         value={password}
         onChange={handleInput}
        />
        <br/><br/>
        <label htmlFor="pnumber"><b>Phone Number  </b></label>
         <input 
         type="phone"
         placeholder="Enter PhoneNumber"
         name="pnumber"
         id="pnumber"
         value={PhoneN}
         onChange={handleInput}
        />
        <br/><br/>

        <button>Register</button>
        </form>
        </div>
    )

}
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser,adddelete } from "../../features/formSlice";

export const UserForm = () => {
   
    const {userdata}=useSelector((state)=>state.userData)
    console.log(userdata);
    const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(userdata.name);
  const dispatch=useDispatch();

  const handlechange=(e)=>{
  const {name,value}=e.target;
  setUserData((prev)=>({...prev,[name]:value}));
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch((addUser(userData)))
   };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">UserName</label>
        <input
          id="name"
          type="text"
          name="name"
          value={userData.name}
          onChange={handlechange}
          placeholder="Enter Name"
        />
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={userData.email}
          onChange={handlechange}
          placeholder="Enter Email"
        />
        <br />
        <br />

        <label htmlFor="pass">passWord</label>
        <input
          id="pass"
          onChange={handlechange}
          value={userData.password}
          name="password"
          type="password"
          placeholder="...."
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      
      {userdata.map((curr)=>(
        <div style={{border: "2px solid black", width:'150px',height:'80px', backgroundColor:'blue',color:'white'}}>
            <h3>Name:{curr.name}</h3>
            <h3>Email:{curr.email}</h3>
           <button onClick={()=>dispatch((adddelete(curr.name)))}>delete</button>
        </div>
        
      ))}

    
    
    </>
  );
};

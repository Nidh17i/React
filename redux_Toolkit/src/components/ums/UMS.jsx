 import {useState,useRef} from 'react';
 import { useSelector,useDispatch} from "react-redux";
 import { addUser } from './UmsSlice';
import { useNavigate } from 'react-router-dom';

 
export const UMS=()=>{
 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userRole = useRef();
  console.log('ref',userRole);
  
   const UMSUser=useSelector((state)=>state.UmsReducer)
   const dispatch = useDispatch();
   const navigate=useNavigate();

  const user={
    id:Date.now(),
    name,
    email,
    role:  backend  //'/userRole.current.value' 
  }


   const handleSubmit=(e)=>{
    e.preventDefault();
    
    dispatch(addUser(user))
    navigate('/')
   }
   

   




    return(
        <>
        <form onSubmit={handleSubmit}>
         <h1>Add User</h1>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          placeholder="enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="enter the email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Role :</label>
        <select ref={userRole}>
          <option value="select Role">Select Role</option>
          <option value="frontend">Fronted</option>
          <option value="backend">Backend</option>
          <option value="fullstack">FullStack</option>
        </select>
        <br />
        <br />
        <button type="submit">submit</button>

        {/* <ul>

        {UMSUser.map((curr,index)=>(
          <li key={index}>
          name:{curr.name} {" "}
          email:{curr.email}{ ' '}
          role: {curr.role}
         <button onClick={()=> dispatch(deleteuser(curr.id))}>Delete</button>
         </li>

        ))}
        </ul>  */}
      </form>
        </>
    )
}


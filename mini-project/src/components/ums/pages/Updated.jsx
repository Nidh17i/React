
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdatedUser } from "../UmsSlice";

export const Updated=()=>{
    const {id}=useParams();
     const UMSUser = useSelector((state) => state.UmsReducer.UserData);

     const user=UMSUser.find((u)=> u.id == id);

const [name, setName] = useState(user ? user.name : "");
const [email, setEmail] = useState(user ? user.email : "");
const [role, setRole] = useState(user ? user.role : "frontend");

     
     const dispatch=useDispatch();
     const navigate = useNavigate();


      const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      UpdatedUser({
        id: user.id,
        data: { name, email, role },
      })
    );

    navigate("/");
  };
   return (
    <form onSubmit={handleSubmit}>
      <h1>Edit User</h1>

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
        id="email"
        placeholder="enter the email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <label>Role :</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">FullStack</option>
      </select>
      <br />
      <br />

      <button type="submit">Update</button>
    </form>
  );

}
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


export const Home = () => {
  const UMSUser = useSelector((state) => state.UmsReducer);
  console.log(UMSUser)



  return (
    <div
      style={{
        boder: "2px solid white",
        backgroundColor: "#022149ff",
        height: "97vh",
        color: "white",
        textAlign:"center",
      }} 
    >
      <h1>User Management System</h1>
      <input
        style={{
          height: "25px",
          borderRadius: "5px",
          backgroundColor: "#f5f1f4ff",
        }}
        type="text"
        placeholder="Search Here.."
      />
      <button
        style={{
          height: "30px",
          borderRadius: "5px",
          backgroundColor: "#f5f1f4ff",
        }}
      >
        serach
      </button>
      <br />
      <br />
      <Link to="/add">
        <button
          style={{
            height: "30px",
            borderRadius: "5px",
            backgroundColor: "#f5f1f4ff",
          }}
        >
          Add User
        </button>
      </Link>

      <ul>
        {UMSUser.map((curr, index) => (
          
          <li
            style={{
              height: "25vh",
              width: "20vh",
              borderRadius: "5px",
              border: "2px solid white",
           
            }}
            key={index}
          >
            <h4>name:{curr.name} </h4>
            <h4>email:{curr.email} </h4>
            <h4> role: {curr.role}</h4>
            <Link to={`/UMSUser/${curr.id}`}>
            <button>view</button>
            </Link>
            
              
          </li>
        ))}
      </ul>
    </div>
  );
};

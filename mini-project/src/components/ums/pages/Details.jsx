import { useSelector, useDispatch } from "react-redux";
import { deleteuser } from "../UmsSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
export const UserDetail = () => {
  const { id } = useParams();
  const UMSUser = useSelector((state) => state.UmsReducer.UserData);
  const user = UMSUser.find((u) => u.id == id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("id ", { id });

  const handleDelete = () => {
    if (window.confirm("delete kr du kya")) {
      dispatch(deleteuser(id));
      navigate("/");
    }
  };

  return (
    <div>
      <h1>User Details </h1>
      <h4>ID:{user.id}</h4>
      <h4>Name:{user.name}</h4>
      <h4>Email:{user.email}</h4>
      <h4>Role:{user.role}</h4>
      <Link to={`/edit/${user.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

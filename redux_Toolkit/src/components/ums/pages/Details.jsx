
import {useSelector,useDispatch} from 'react-redux'
import { deleteuser } from '../UmsSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
export const UserDetail=()=>{
    const UMSUser=useSelector((state)=>state.UmsReducer)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const {id}=useParams()
    console.log('id ',{id})
  

    const handleDelete=()=>{
        window.confirm('delete kr du kya');
        dispatch(deleteuser(id))
        


    }
    navigate('/')
    
    return(
        <>
        {UMSUser.map((curr)=>(
            <li key={curr.id}>
                <h1>User Details </h1>
                <h4>ID:{curr.id}</h4>
                <h4>Name:{curr.name}</h4>
                <h4>Email:{curr.email}</h4>
                <h4>Role:{curr.role}</h4>
                <Link to='/Edit'>
                <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </li>

        ))}
     

        
        </>
    )
}
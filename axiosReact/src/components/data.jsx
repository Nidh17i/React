import { useState ,useEffect} from "react";
import axios from 'axios';

export const Data = () => {
  const [apiData, setApiData] = useState([]);

  // useEffect(()=>{
  //   fetch("https://dummyjson.com/users").then((res) => res.json())
  //   .then((data) => setApiData(data.users))},[])


  useEffect(()=>{
    const data=axios.get('https://dummyjson.com/users');
      console.log(data)

  },[])

  

  // console.log(apiData);

  return <>

 {apiData.map((data)=>(
  <li> 
   <h4>FirstName:{data.firstName}</h4>
     <h4>LastName:{data.lastName}</h4>
     </li>
  
  
 ))}

  </>;
};

import axios from 'axios';
import { useEffect } from 'react'


export const FetchData=()=> {
    useEffect(()=>{
       getData();
},[])

    const getData=async()=>{
        try{
       const response=await axios('https://jsonplaceholder.typicode.com/todos/');
       
       console.log(response.data);
        }catch(err){
            console.log(err);
        }
        
    }
  return (
    <div>fetchData</div>
  )
}

import { useEffect } from "react";



 export const FetchApi=()=>{



    useEffect(()=>{
        DataFetch();
        

},[]);
//  function DataFetch(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res)=>res.json())
//     .then((data)=>console.log(data));
//}


const DataFetch=async()=>{
    try{
  const res=await  fetch('https://jsonplaceholder.typicode.com/todos');
  const data= await res.json();
  console.log(data);
    }
    catch{
        console.log(err);
    }

}


  

    return(
        <>
        <h1>Hoo</h1>
        </>
    )


}


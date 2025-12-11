import { useCallback, useState } from 'react'
import Child from './Child';

export default function CallbackCounter({}) {
    console.log('parent render')
    const[count,setCount]=useState(0);

 const btnClick=useCallback( ()=>{
        console.log('hii I am btnClick funtion');
        
    },[])
  return (
    <div>
       <Child change={btnClick}/>
        <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}

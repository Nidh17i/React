import React from 'react'

export default function Counter1({count,setCount}) {
  return (

    <>
    
    <button onClick={()=>setCount (count+1)}>btn1</button>
    </>
  )
}

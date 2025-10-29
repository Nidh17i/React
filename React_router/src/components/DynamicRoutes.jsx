
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DynamicRoutes = () => {
    const obj=useParams();
    console.log(obj);
  return (

   


    <div>
        <h1>hello {obj.name}</h1>
    </div>
  )
}

export default DynamicRoutes
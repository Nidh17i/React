import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from './StudentSlice'

export const AddStudent=()=>{
    const[student,setStudent]=useState('')
    const dispatch=useDispatch();

    const studentList=useSelector((state)=>(state.student));
    console.log('studentList',studentList);

    const handleAdd=()=>{
        dispatch(addStudent(student))
    }
    return(
        <>
        <input
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={(e)=>setStudent(e.target.value)}

        />
        <button onClick={handleAdd}
        >Add</button>

         {studentList.map((curr)=>(
            <li>{curr}</li>

        ))} 


        </>
    )
}
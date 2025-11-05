import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,deleteTodo } from "./TodoSlice";

export const Todo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
 

  const TodoList = useSelector((state) => state.Todo.Todo);
  console.log(TodoList);

  const handleAdd = () => {
    dispatch(addTodo(task));
    setTask('')
  };

//   console.log("task", task);
  return (
    <div style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#d1a2a2ff",
      }}

    >
      <input
        style={{
            padding: "8px",
            width: "70%",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
          }}
        type="text"
        placeholder="enter Task.."
        value={task}
        onChange={(e) => ("input value", setTask(e.target.value))}
      />
      <button 
      onClick={handleAdd}
          style={{
            marginLeft: "10px",
            padding: "8px 15px",
            backgroundColor: "#040d16ff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
      >Add</button>

      {TodoList.map((curr,id)=>(
        <li
        style={{
              marginBottom: "10px",
              padding: "8px",
              backgroundColor: "#f0e2e2d2",
              border: "1px solid #ddd",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }} 
        key={id}>
        {curr}
        <button 
        onClick={()=>dispatch(deleteTodo(curr.id))}
        style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
        >Delete</button>
        </li>
       
      ))}
    
          

    </div>
  );
};



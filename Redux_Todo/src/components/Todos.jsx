
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.tasks);
  //console.log('useSelctor hook',tasks)

  const dispatch = useDispatch();

  const handleAdd = () => {

    dispatch({ type: "task/add", payload: task });
    setTask("");
  };

  const handleDelete = (index) => {
    dispatch({ type: "task/delete", payload: index });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

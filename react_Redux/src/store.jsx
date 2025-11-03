import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  tasks: [],
};
const taskReducer = (state = initialState, action) => {
    // console.log('states',state)
    // console.log('tasks',state.tasks)
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_,index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export const store = createStore(taskReducer);


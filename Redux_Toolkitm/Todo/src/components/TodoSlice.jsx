import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Todo: [],
};
const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //console.log('add Todo',action.payload)
      state.Todo.push({
        id:Date.now(),
        task:action.payload
      }
      );
      console.log(state.Todo);
    },
    deleteTodo: (state, action) => {
      // state.Todo = state.Todo.filter((u) => u.id !== action.payload);
      console.log(state.Todo, 'filter data', action.payload)
      // state.Todo.splice(action.payload,1);
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;

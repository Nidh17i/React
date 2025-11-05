import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserData: JSON.parse(localStorage.getItem("users") || "[]"),
};
const UmsSlice = createSlice({
  name: "UmsReducer",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.UserData.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.UserData));
    },
    deleteuser: (state, action) => {
      state.UserData = state.UserData.filter((u) => u.id != action.payload);
      localStorage.setItem("users", JSON.stringify(state.UserData));
    },
    UpdatedUser: (state, action) => {
      const { id, data } = action.payload;
      const user = state.UserData.find((u) => u.id === id);
      if (user) {
        Object.assign(user, data);
        localStorage.setItem("users", JSON.stringify(state.UserData));
      }
    },
  },
});

export const { addUser, deleteuser, UpdatedUser } = UmsSlice.actions;
export default UmsSlice.reducer;

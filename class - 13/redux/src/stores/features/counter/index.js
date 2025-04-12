import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // todoAdded(state, action) {
    //   state.push({
    //     id: action.payload.id,
    //     text: action.payload.text,
    //     completed: false,
    //   });
    // },
    // todoToggled(state, action) {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   todo.completed = !todo.completed;
    // },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      //   console.log(action);
      const decValue = action.payload ?? 1;
      state.value -= decValue;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

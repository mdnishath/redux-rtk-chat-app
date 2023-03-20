import { createSlice } from "@reduxjs/toolkit";

//Initial state
const initialState = {};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const {} = messagesSlice.actions;
export default messagesSlice.reducer;

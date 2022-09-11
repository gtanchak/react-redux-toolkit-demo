import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ghanshyam Tanchak" },
  { id: "1", name: "Hitendra Vaghasiya" },
  { id: "2", name: "Ashish Barwaliya" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUser = (state: any) => state.users;

export default usersSlice.reducer;

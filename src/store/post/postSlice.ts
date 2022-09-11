import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: string;
  title: string;
  content: string;
}

const initialState: Post[] = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I have heard good things",
  },
  {
    id: "2",
    title: "Slices....",
    content: "Created more Slices.",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.push(action.payload);
      },
      prepare: (title: string, content: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;

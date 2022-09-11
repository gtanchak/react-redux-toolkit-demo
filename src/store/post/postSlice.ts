import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

const initialState: Post[] = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I have heard good things",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "Slices....",
    content: "Created more Slices.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
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
      prepare: (title: string, content: string, userId: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPost = (state: any) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;

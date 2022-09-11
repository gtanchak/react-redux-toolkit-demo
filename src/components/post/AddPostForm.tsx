import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../../store/post/postSlice";

const initialState = {
  title: "",
  content: "",
};

const AddPostForm: FC = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState(initialState);

  const onAddPostHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(postAdded(post.title, post.content));
    setPost(initialState);
  };

  return (
    <form>
      <div className="mb-4">
        <label className="block text-blue-600 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label className="block text-blue-600 text-sm font-bold mb-2">
          Content
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={post.content}
          placeholder="Message"
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
      </div>
      <button
        className="bg-blue-600 text-white rounded-md px-6 py-2 font-medium text-xl"
        onClick={onAddPostHandler}
      >
        Add
      </button>
    </form>
  );
};

export default AddPostForm;

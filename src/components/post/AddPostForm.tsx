import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { postAdded } from "../../store/post/postSlice";
import { selectAllUser } from "../../store/users/userSlice";

const initialState = {
  title: "",
  content: "",
  userId: "",
};

const AddPostForm: FC = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState(initialState);

  const users = useAppSelector(selectAllUser);

  const onAddPostHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(postAdded(post.title, post.content, post.userId));
    setPost(initialState);
  };

  const userOptions = users.map((user: any) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave =
    Boolean(post.title) && Boolean(post.content) && Boolean(post.userId);

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
      <div className="mb-4">
        <label className="block text-blue-600 text-sm font-bold mb-2">
          Author
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={post.userId}
          onChange={(e) => setPost({ ...post, userId: e.target.value })}
          placeholder="Username"
        >
          <option>Select Author</option>
          {userOptions}
        </select>
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
        className="bg-blue-600 text-white rounded-md px-6 py-2 font-medium text-xl disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onAddPostHandler}
        disabled={!canSave}
      >
        Add
      </button>
    </form>
  );
};

export default AddPostForm;

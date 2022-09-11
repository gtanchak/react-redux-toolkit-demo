import AddPostForm from "./components/post/AddPostForm";
import PostList from "./components/post/PostList";

const App = () => {
  return (
    <div className="container m-auto">
      <div className="p-5 grid grid-cols-2 gap-16">
        <AddPostForm />
        <PostList />
      </div>
    </div>
  );
};

export default App;

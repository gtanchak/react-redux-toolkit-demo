import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const PostList: FC = () => {
  const posts = useAppSelector((state) => state.posts);

  // const orderPost = posts.slice().sort((a, b) => b.date.localecompare(a.date));
  // console.log("dfsd", orderPost);

  return (
    <div>
      <h2 className="text-blue-600 text-xl font-bold">Posts</h2>
      {posts.map((post: any) => (
        <article
          className="bg-yellow-400 my-4 border-blue-600 border-2 rounded-md p-2"
          key={post.id}
        >
          <h3 className="font-bold text-blue-600">{post.title}</h3>
          <p className="text-gray-800">{post.content.substring(0, 100)}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;

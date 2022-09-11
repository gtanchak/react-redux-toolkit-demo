import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectAllUser } from "../../store/users/userSlice";

const PostAuthor: FC<any> = ({ userId }: { userId: string }) => {
  const users = useAppSelector(selectAllUser);

  const author = users.find((user: any) => user.id === userId);

  return <span>by {author ? author.name : "Unknown user"}</span>;
};

export default PostAuthor;

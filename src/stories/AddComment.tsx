import { useState } from "react";
import Button from "./Button";
import "./addComment.css";

type Props = {
  onComment: (commentTextInput: string) => void;
  user?: string | null;
};

const AddComment = ({ onComment, user }: Props) => {
  const [commentTextInput, setCommentTextInput] = useState<string>("");

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const text = e.target.value;
    setCommentTextInput(text);
  };
  return (
    <div className="add-comment-container">
      {user ? (
        <>
          {" "}
          <input className="comment-input" onChange={handleCommentChange} />
          <Button
            color="green"
            label="Add Comment"
            onClick={() => onComment(commentTextInput)}
          />
        </>
      ) : (
        <h5 style={{ textAlign: "center", padding: 20, color: "grey" }}>
          For add comment, please log in.
        </h5>
      )}
    </div>
  );
};

export default AddComment;

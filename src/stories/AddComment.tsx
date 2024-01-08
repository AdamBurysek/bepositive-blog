import { useState } from "react";
import Button from "./Button";
import "./addComment.css";

type Props = { onComment: (commentTextInput: string) => void };

const AddComment = ({ onComment }: Props) => {
  const [commentTextInput, setCommentTextInput] = useState<string>("");

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const text = e.target.value;
    setCommentTextInput(text);
  };
  return (
    <>
      <input className="comment-input" onChange={handleCommentChange} />
      <Button
        color="green"
        label="Add Comment"
        onClick={() => onComment(commentTextInput)}
      />
    </>
  );
};

export default AddComment;

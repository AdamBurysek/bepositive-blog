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

  const haldleCommentButtonClick = () => {
    onComment(commentTextInput);
    setCommentTextInput("");
  };

  return (
    <div className="add-comment-container">
      {user ? (
        <>
          <input
            className="comment-input"
            value={commentTextInput}
            onChange={handleCommentChange}
          />
          <Button
            color="green"
            label="Add Comment"
            onClick={haldleCommentButtonClick}
          />
        </>
      ) : (
        <h5
          style={{
            textAlign: "center",
            paddingTop: 25,
            paddingBottom: 20,
            color: "grey",
          }}
        >
          To add a comment, please log in.
        </h5>
      )}
    </div>
  );
};

export default AddComment;

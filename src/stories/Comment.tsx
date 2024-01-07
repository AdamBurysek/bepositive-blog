import { useEffect, useState } from "react";
import Button from "./Button";
import "./comment.css";

type Props = {
  onReply: (replyTextInput: string) => void;
  onDelete: () => void;
  user?: string | null;
  userId?: string | null;
  commentUsername: string;
  commentUsernameID: string;
  commentText: string;
  replies?: { replyId: string; replyUsername: string; replyText: string }[];
};

const Comment = ({
  onReply,
  onDelete,
  user = "Adam",
  userId = "123",
  commentUsername = "Adam",
  commentUsernameID = "123",
  commentText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt consequatur omnis ratione accusantium illo officiis et optio porro. Voluptatibus!",
  replies = [
    { replyId: "1", replyUsername: "Adam", replyText: "hohohoho" },
    { replyId: "2", replyUsername: "bob", replyText: "hehehehe" },
  ],
}: Props) => {
  const [deletable, setDeletable] = useState<boolean>(false);
  const [replyTextInput, setReplyTextInput] = useState<string>("");

  function checkDeletableStatus() {
    if (user === commentUsername && userId === commentUsernameID) {
      setDeletable(true);
    } else {
      setDeletable(false);
    }
  }

  useEffect(() => {
    checkDeletableStatus();
  }, [user]);

  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    setReplyTextInput(text);
  };

  return (
    <div className="comment-container">
      <h4 className="author-name">{commentUsername}</h4>
      {deletable ? (
        <div style={{ position: "absolute", right: -5, top: -5 }}>
          <Button color="red" label="X" onClick={onDelete} size="small" />
        </div>
      ) : null}
      <p className="comment-text">{commentText}</p>
      {replies &&
        replies.map((reply: any) => (
          <div key={reply.replyId}>
            <div className="reply-line" />
            <h4 className="reply-name">{reply.replyUsername}</h4>
            <p className="reply-text">{reply.replyText}</p>
          </div>
        ))}
      <input className="reply-input" onChange={handleReplyChange} />
      <Button
        color="green"
        label="Reply"
        onClick={() => onReply(replyTextInput)}
      />
    </div>
  );
};

export default Comment;

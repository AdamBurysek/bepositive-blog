import { useEffect, useState } from "react";
import Button from "./Button";
import "./comment.css";

interface ReplyData {
  commentId?: string;
  replyId: string;
  username?: string;
  userId?: string;
  text: string;
}

type Props = {
  onReply: (replyTextInput: string, id: string) => void;
  onDelete: (id: string) => void;
  id: string;
  user?: string | null;
  userId?: string | null;
  commentUsername: string | undefined;
  commentUsernameID: string;
  commentText: string;
  replies?: ReplyData[];
};

const Comment = ({
  onReply,
  onDelete,
  id,
  user,
  userId,
  commentUsername,
  commentUsernameID,
  commentText,
  replies,
}: Props) => {
  const [deletable, setDeletable] = useState<boolean>(false);
  const [replyTextInput, setReplyTextInput] = useState<string>("");

  useEffect(() => {
    checkDeletableStatus();

    function checkDeletableStatus() {
      if (user === commentUsername && userId === commentUsernameID) {
        setDeletable(true);
      } else {
        setDeletable(false);
      }
    }
  }, [user, commentUsername, userId, commentUsernameID]);

  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    setReplyTextInput(text);
  };

  const handleReplyButtonClick = () => {
    onReply(replyTextInput, id);
    setReplyTextInput("");
  };

  return (
    <div className="comment-container">
      <h4 className="author-name">{commentUsername}</h4>
      {deletable ? (
        <div style={{ position: "absolute", right: -5, top: -5 }}>
          <Button
            color="red"
            label="X"
            onClick={() => onDelete(id)}
            size="small"
          />
        </div>
      ) : null}
      <p className="comment-text">{commentText}</p>
      {replies &&
        replies.map((reply: ReplyData) => (
          <div key={reply.replyId}>
            <div className="reply-line" />
            <h4 className="reply-name">{reply.username}</h4>
            <p className="reply-text">{reply.text}</p>
          </div>
        ))}
      {user ? (
        <div className="reply-input-container">
          <input
            className="reply-input"
            value={replyTextInput}
            onChange={handleReplyChange}
          />
          <Button
            color="green"
            label="Reply"
            onClick={handleReplyButtonClick}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Comment;

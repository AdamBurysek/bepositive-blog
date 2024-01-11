export interface CommentData {
  id: string;
  locationId: string;
  text: string;
  username?: string;
  userId?: string;
  replies: ReplyData[];
}

export interface ReplyData {
  commentId?: string;
  replyId: string;
  username?: string;
  userId?: string;
  text: string;
}

export interface Props {
  user: { username: string; userId: string } | null;
}

export interface LocationData {
  locationId: number;
  title: string;
  image: string;
  desc: string;
  text: string;
}

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

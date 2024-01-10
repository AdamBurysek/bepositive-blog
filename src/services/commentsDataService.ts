import http from "../http-common";

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

class CommentsDataService {
  getComments(id: number) {
    return http.get(`/comments?id=${id}`);
  }

  createComment(commentData: CommentData) {
    return http.post("/comments", commentData);
  }

  addReply(replyData: ReplyData) {
    return http.put("/comments", replyData);
  }

  deleteComment(id: string) {
    return http.delete(`/comments?id=${id}`);
  }
}

export default new CommentsDataService();

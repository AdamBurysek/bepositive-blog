import http from "../http-common";
import { CommentData, ReplyData } from "./dataServiceTypes";

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

import http from "../http-common";

class CommentsDataService {
  getComments(id: number) {
    return http.get(`/comments?id=${id}`);
  }

  createComment(data: any) {
    return http.post("/comments", data);
  }

  updateComment(data: any) {
    return http.put("/comments", data);
  }

  deleteComment(id: number) {
    return http.delete(`/comments?id=${id}`);
  }
}

export default new CommentsDataService();

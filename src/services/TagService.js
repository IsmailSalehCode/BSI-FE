import Api from "@/services/Api";

export default {
  getTopTags() {
    return Api().get("/tags/top");
  },
  //   getRecentPosts() {
  //     return Api().get(`posts/recent`);
  //   },
  //   getPost(id) {
  //     return Api().get(`post/${id}`);
  //   },
  //   getTopPosts() {
  //     return Api().get("topposts");
  //   },
  //   getActivePosts(pageNum) {
  //     return Api().get(`activeposts?page=${pageNum}`);
  //   },

  //   addView(id) {
  //     return Api().patch(`posts/addView/${id}`);
  //   },

  //   addLike(id) {
  //     return Api().patch(`comments/addLike/${id}`);
  //   },

  //   removeLike(id) {
  //     return Api().patch(`comments/removeLike/${id}`);
  //   },

  //   addShare(id) {
  //     return Api().patch(`posts/addShare/${id}`);
  //   },

  //   addComment(token, comment) {
  //     return Api().post("posts/addComment", comment, {
  //       headers: {
  //         captcha: token,
  //       },
  //     });
  //   },
};

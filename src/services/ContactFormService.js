import Api from "@/services/Api";

export default {
  addForm(token, form) {
    return Api().post("/contact-forms", form, {
      headers: {
        captcha: token,
      },
    });
  },
};

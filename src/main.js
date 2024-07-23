import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

const app = createApp(App);
app.use(vuetify);
app.use(router);
<<<<<<< HEAD

=======
>>>>>>> 49f26bd987c53cbc57b05d7a44834fced59dab52
app.mount("#app");

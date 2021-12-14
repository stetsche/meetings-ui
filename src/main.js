import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./pages/Main.vue";
import Settings from "./pages/CreateMeetting.vue";
import App from "./App.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/settings", name: "Settings", component: Settings },
];
const router = new VueRouter({ mode: "history", routes: routes });

Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

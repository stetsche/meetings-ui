import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./pages/Main.vue";
import Settings from "./pages/CreateMeetting.vue";
import Permissions from "./pages/Permissions.vue";
import App from "./App.vue";

const routes = [
  { path: "/", redirect: "/meetings-ui" },
  { path: "/meetings-ui/", name: "Main", component: Main },
  { path: "/meetings-ui/settings", name: "Settings", component: Settings },
  { path: "/meetings-ui/permissions", name: "Permissions", component: Permissions },
];
const router = new VueRouter({ mode: "history", routes: routes });

Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

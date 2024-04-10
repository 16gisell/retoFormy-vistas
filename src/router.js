import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter.vue";
import Consultar from "./views/Consulta.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [  
    {
      path: "/",
      name: "consultar",
      components: {
        header: AppHeader,
        default: Consultar,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

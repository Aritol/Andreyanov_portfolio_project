import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";

axios.interceptors.request.use(function (config) {
  const isAuthenticated = store.getters["auth/isAuthenticated"]();
  if (isAuthenticated) {
    config.headers["Authorization"] =
      "Bearer " + store.getters["auth/getAccessToken"]();
  } else {
    config.headers["Authorization"] = null;
  }
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      // Якщо сервер відповів «401»
      router.push({ path: "/login" });
    }
    return Promise.reject(error);
  }
);
//---------------------------
router.beforeEach((to, from, next) => {
  let check =
    !store.getters["auth/isAuthenticated"]() &&
    ["/signup", "/products/edit"].includes(to.path);
  console.log(check);
  if (check) {
    // Недопускаємо до захищених роутів, якщо немає токена

    next({ path: "/" });
    return;
  } else {
    next();
  }

  // next();
});

createApp(App).use(router).use(store).mount("#app");

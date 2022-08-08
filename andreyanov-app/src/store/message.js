// import { createStore } from 'vuex'
import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

const store = {
  namespaced: true,
  state: {
    messagesList: [],
    // message: {},
  },
  mutations: {},
  actions: {
    addMessage({ commit }, message) {
      //   const formData = new FormData();
      //   for (const key in product) {
      //     formData.append(key, product[key]);
      //   }
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.messages.add, message)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },
  },
  getters: {},
};

export default store;

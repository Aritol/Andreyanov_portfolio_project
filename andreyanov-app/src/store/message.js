// import { createStore } from 'vuex'
import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

const store = {
  namespaced: true,
  state: {
    messagesList: [],
    // message: {},
    loading: false, //індикатор завантаження
    error: false,
  },
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },
    deleteMessageFromList(state, messageId) {
      state.messagesList = state.messagesList.filter(
        (message) => message._id !== messageId
      );
    },

    // orders: (state) => state.orders,
    setMessages(state, messagesList) {
      state.messagesList = messagesList;
    },
  },
  actions: {
    addMessage({ commit }, message) {
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
            // commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    async loadMessages({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      await axios
        .get(apiEndpoints.messages.readList) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) {
            commit("setMessages", resData.data);
          } else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          //Якщо погано
          commit("setError", err);
        })
        .finally(
          //Завжди
          () => commit("setLoading", false)
        );
    },

    deleteMessage({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      new Promise((resolve, reject) => {
        axios
          .delete(apiEndpoints.messages.delete, { data: { id } })
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            console.log("-resData");
            console.log(resData);
            if (resData.success) {
              commit("deleteMessageFromList", id);
              resolve(true);
            } else throw new Error("Delete failed!");
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

    getMessageById({ commit }, messageId) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndpoints.messages.getMessageById(messageId))
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(resData.data);
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
  getters: {
    messageList: (state) => state.messagesList,
    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
};

export default store;

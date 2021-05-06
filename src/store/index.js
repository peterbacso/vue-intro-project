import { createStore } from "vuex";

export default createStore({
  state: {
    toastConfig: {
      position: "top-right",
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

export const UserModule = {
  namespaced: true,

  state: {
    user: null,
  },

  // Mutations are functions that effect the state
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  // functions that are called throughtout application that call mutations
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
  },
};

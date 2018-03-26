import get from '../js/request';

const states = {
  bookList: [],
};

const getters = {
  getBooksList({ bookList }) {
    return bookList;
  },
};

const mutations = {
  setBooksList(state, list) {
    state.bookList = list;
  },
};

const actions = {
  FETCH_LIST({ commit }) {
    get('./livros.json').then(e => commit('setBooksList', e));
  },
};

export {
  states,
  getters,
  actions,
  mutations,
};

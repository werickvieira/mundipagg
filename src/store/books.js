import get from '../js/request';

const state = {
  bookList: [],
};

const getters = {
  getBooksList({ bookList }) {
    return bookList
  }
};

const mutations = {
  setBooksList(state, list) {
    state.bookList =  list;
  }
};

const  actions = {
  FETCH_LIST({ commit }) {
    get('./livros.json').then((e) => commit('setBooksList', e));
  }
};

export {
  state,
  getters,
  actions,
  mutations,
};




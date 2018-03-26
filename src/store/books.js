import get from '../js/request';

const states = {
  bookList: [],
  bookCart: [],
};

const getters = {
  getBooksList({ bookList }) {
    return bookList;
  },
};

const mutations = {
  SET_BOOKS_LIST(state, list) {
    state.bookList = list;
  },
  ADD_BOOK_CART(state, { id }) {
    const item = state.bookCart.filter(e => e.id === id);
    if (item.length === 0) {
      state.bookCart.push({
        counter: 1,
        id,
      });
    } else {
      item[0].counter += 1;
    }
  },
  DELETE_BOOK_CART(state, { id }) {
    state.bookCart.splice(id);
  },
};

const actions = {
  async fetchList({ commit }) {
    const response = await get('./livros.json').then(e => e);
    commit('SET_BOOKS_LIST', response);
  },
  addBookCart({ commit }, bookItem) {
    commit('ADD_BOOK_CART', bookItem);
  },
  deleteBookCart({ commit }, bookId) {
    commit('DELETE_BOOK_CART', bookId);
  },
};

export {
  states as state,
  getters,
  actions,
  mutations,
};

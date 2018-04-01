import get from '../js/request';

const states = {
  bookList: [],
  bookCart: [],
};

const getters = {
  getBooksList({ bookList }) {
    return bookList;
  },
  getBooksCart({ bookCart }) {
    return bookCart;
  },
};

const mutations = {
  SET_BOOKS_LIST(state, list) {
    state.bookList = list;
  },
  SET_LIST_BOOKS_CART(state, list) {
    state.bookCart = list;
  },
  ADD_BOOKS_CART(state, book) {
    const { id, description, price } = book;
    const item = state.bookCart.filter(e => e.id === id);
    if (item.length === 0) {
      state.bookCart.push({
        counter: 1,
        id,
        description,
        price,
      });
    } else {
      item[0].counter += 1;
    }
  },
  DELETE_BOOKS_CART({ bookCart }, id) {
    const item = bookCart.filter(e => e.id === id);
    const index = bookCart.indexOf(item[0]);
    bookCart.splice(index, 1);
  },
};

const actions = {
  async fetchList({ commit }) {
    try {
      const response = await get('./livros.json');
      commit('SET_BOOKS_LIST', response);
    } catch (e) {
      // console.log('Erro', e);
    }
  },
  addBookCart({ commit }, bookItem) {
    commit('ADD_BOOKS_CART', bookItem);
  },
  deleteBookCart({ commit }, bookId) {
    commit('DELETE_BOOKS_CART', bookId);
  },
  setListBooksCart({ commit }, list) {
    commit('SET_LIST_BOOKS_CART', list);
  },
};

export {
  states as state,
  getters,
  actions,
  mutations,
};

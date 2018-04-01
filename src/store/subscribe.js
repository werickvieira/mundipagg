const subscribe = (store) => {
  store.subscribe(({ type }, state) => {
    if (type === 'ADD_BOOKS_CART' || type === 'DELETE_BOOKS_CART') {
      const { bookCart } = state;
      sessionStorage.setItem('books', JSON.stringify(bookCart));
    }
  });
};

export default subscribe;

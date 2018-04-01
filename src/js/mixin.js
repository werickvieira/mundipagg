const mixin = {
  methods: {
    formatPrice(price, options = { style: 'currency', currency: 'BRL' }) {
      return (
        price.toLocaleString(
          'pt-BR',
          options,
        )
      );
    },
  },
};

export default mixin;


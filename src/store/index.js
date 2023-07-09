import { createStore } from "vuex";

const store = createStore({
  modules: {
    cart: {
      namespaced: true, // ???
      state() {
        return {
          cartAddedProducts:
            JSON.parse(localStorage.getItem("cartProducts")) || [],
        };
      },
      mutations: {
        addToCart(state, product) {
          state.cartAddedProducts.push(product);
          localStorage.setItem(
            "cartProducts",
            JSON.stringify(state.cartAddedProducts)
          );
        },
      },
      actions: {},
      getters: {},
    },
  },
});

export default store;

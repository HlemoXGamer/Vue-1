<template>
  <div>
    <div
      class="container"
      v-for="product in cartAddedProducts"
      :key="product.id"
    >
      <div>
        <h2>{{ product.title }}</h2>
        <h4>{{ product.price + "$" }}</h4>
      </div>
      <div>
        <button @click="increase">+</button>
        <span>{{ num }}</span>
        <button @click="decrease">-</button>
      </div>
    </div>
    <div class="container2">
      <button @click="checkout">Check Out</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      num: 0,
    };
  },
  computed: {
    ...mapState("cart", ["cartAddedProducts"]),
  },
  methods: {
    ...mapMutations("cart", ["addToCart"]),
    checkout() {
      localStorage.clear();
      this.$router.push("/");
    },
    increase() {
      this.num++;
    },
    decrease() {
      this.num++;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
}
.container2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
span {
  margin: 0 15px;
}
</style>

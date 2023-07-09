<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ price + "$" }}</p>
      <p class="card-text">{{ description }}</p>
      <button class="btn btn-primary" @click="addToCart">Buy Now</button>
    </div>
  </div>
  <hr />
</template>

<script>
export default {
  props: ["id", "title", "description", "price"],
  methods: {
    addToCart() {
      this.$store.commit("cart/addToCart", {
        id: this.id,
        title: this.title,
        description: this.description,
        price: this.price,
      });
      alert(`You have bought ${this.title} 💙\n Check The Cart !`);
    },
  },
};
</script>

<style lang="scss" scoped></style>

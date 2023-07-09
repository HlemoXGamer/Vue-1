<template>
  <div>
    <Product
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :description="product.description"
    />
  </div>
</template>

<script>
import Product from "../components/UI/Product.vue";
export default {
  provide() {
    return {
      products: this.products,
    };
  },
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      fetch(
        "https://vue-commerce-44193-default-rtdb.firebaseio.com/products.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const products = [];
          for (const id in data) {
            products.push({
              id,
              title: data[id].title,
              price: data[id].price,
              description: data[id].description,
            });
          }
          this.products = products;
        })
        .catch(() => {
          alert("Patrik Become genius 😂");
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped></style>

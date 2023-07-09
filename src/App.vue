<template>
  <TheHeader />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import Home from "./pages/Home.vue";

export default {
  provide() {
    return {
      cartAddedProducts: [],
    };
  },
  components: { TheHeader, Home },
  data() {
    return {
      cartAddedProducts: [],
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  flex-wrap: wrap;
}
</style>

<template>
  <div>
    <h1>Title - Price</h1>
    <ul>
      <li>description 1</li>
      <li>description 2</li>
      <li>description 3</li>
      <li>description 4</li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["products"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.products);
  },
};
</script>

<style lang="scss" scoped></style>

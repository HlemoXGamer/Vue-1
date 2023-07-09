<template>
  <header>
    <div class="logo">
      <h2><router-link to="/">Shop</router-link></h2>
    </div>
    <div class="links">
      <ul>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul li {
  padding: 0 10px;
}
ul li a {
  padding: 0 10px;
}
</style>

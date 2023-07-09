import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Products from "./pages/Products.vue";
import Cart from "./pages/Cart.vue";
import ProductDetails from "./pages/ProductDetails.vue";
import Dashboard from "./pages/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/products/:productId",
      name: "ProductDetails",
      component: ProductDetails,
    },
  ],
});

export default router;

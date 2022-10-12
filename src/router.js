import Cart from "~/views/Cart.vue";
import Checkout from "~/views/Checkout.vue";
import Confirmation from "~/views/Confirmation.vue";
import Home from "~/views/Home.vue";
import Product from "~/views/Product.vue";
import Products from "~/views/Products.vue";

import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{ path: "/", component: Products },
	// { path: "/products", component: Products },
	{ path: "/product/:id", component: Product },
	{ path: "/cart", component: Cart },
	{ path: "/checkout", component: Checkout },
	{ path: "/confirmation", component: Confirmation },
];
export const router = createRouter({
	history: createWebHistory(),
	routes,
});

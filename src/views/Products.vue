<template>
	<DefaultLayout>
		<ProductList :products="products" />
	</DefaultLayout>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import DefaultLayout from "~/components/DefaultLayout.vue";
import { namespace as ProductsModule } from "~/store/products.js";
import ProductList from "../components/ProductList.vue";

const store = useStore();
const products = computed(() => store.state.products.products);
const getProducts = async () => {
	try {
		await store.dispatch(`${ProductsModule}/getProducts`);
	} catch (e) {
		console.error(e);
		console.log("failed to get products");
	}
};
onMounted(async () => {
	getProducts();
});
</script>

<style lang="scss" scoped></style>

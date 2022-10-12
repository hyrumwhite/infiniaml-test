<template>
	<DefaultLayout class="flex flex-col gap-3">
		<ProductOverview :product="product" />
	</DefaultLayout>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import DefaultLayout from "~/components/DefaultLayout.vue";
import { namespace as ProductsModule } from "~/store/products.js";
import ProductOverview from "../components/ProductOverview.vue";
const product = computed(() => store.state.products.currentProduct);

const store = useStore();

const route = useRoute();
onMounted(() => {
	store.dispatch(`${ProductsModule}/getProduct`, route.params);
});
</script>

<style lang="scss" scoped></style>

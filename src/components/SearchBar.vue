<template>
	<div>
		<label for="email" class="block text-sm font-medium text-gray-700"
			>Find your product</label
		>
		<div class="mt-1">
			<input
				type="text"
				name="product-search"
				id="product-search"
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				placeholder="e.g. Fuzzy Slippers"
				:value="searchValue"
				@input="updateProductsList"
			/>
		</div>
	</div>
</template>

<script setup>
import { useStore } from "vuex";
import { namespace as ProductsModule } from "~/store/products.js";
import { computed } from "vue";

const store = useStore();
let searchTimeout = null;

const searchValue = computed(() => store.state.products.filter.search);
const debounceDelay = 500;
const updateProductsList = ($event) => {
	console.log("test");
	clearTimeout(searchTimeout);
	searchTimeout = window.setTimeout(() => {
		store.dispatch(`${ProductsModule}/searchProducts`, {
			search: $event.target.value,
		});
	}, debounceDelay);
};
</script>

<style lang="scss" scoped></style>

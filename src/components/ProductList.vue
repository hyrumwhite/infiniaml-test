<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
	<ul
		role="list"
		class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
	>
		<ProductCard
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</ul>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
const props = defineProps({
	products: {
		type: Array,
		default: () => [],
	},
});
</script>

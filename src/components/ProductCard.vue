<template>
	<li class="relative">
		<div
			class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
		>
			<img
				:src="product.images[3] || product.images[0]"
				:alt="`An image of ${product.title}`"
				class="pointer-events-none object-cover group-hover:opacity-75"
			/>
			<button type="button" class="absolute inset-0 focus:outline-none">
				<RouterLink :to="`/product/${product.id}`" class="absolute inset-0">
					<span class="sr-only">View details for {{ product.title }}</span>
				</RouterLink>
			</button>
		</div>
		<p
			class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900"
		>
			{{ product.title }}
		</p>
		<p class="pointer-events-none block text-sm font-medium text-gray-500">
			{{ displayPrice }}
		</p>
	</li>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
	product: {
		type: Object,
		default: () => ({}),
	},
});
const displayPrice = computed(() =>
	Intl.NumberFormat(navigator.language, {
		style: "currency",
		currency: "USD",
	}).format(props.product.price)
);
</script>

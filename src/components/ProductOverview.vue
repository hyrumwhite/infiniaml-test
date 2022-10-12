<template>
	<div class="bg-white">
		<div class="pt-6">
			<!-- Image gallery -->
			<div
				v-if="product.images"
				class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
			>
				<div
					v-if="product.images[0]"
					class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block"
				>
					<img
						:src="product.images[0]"
						:alt="product.description"
						class="h-full w-full object-cover object-center"
					/>
				</div>
				<div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
					<div
						v-if="product.images[1]"
						class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg"
					>
						<img
							:src="product.images[1]"
							:alt="product.description"
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<div
						v-if="product.images[2]"
						class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg"
					>
						<img
							:src="product.images[2]"
							:alt="product.description"
							class="h-full w-full object-cover object-center"
						/>
					</div>
				</div>
				<div
					v-if="product.images[3]"
					class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4"
				>
					<img
						:src="product.images[3]"
						:alt="product.description"
						class="h-full w-full object-cover object-center"
					/>
				</div>
			</div>

			<!-- Product info -->
			<div
				class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
			>
				<div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
					<h1
						class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
						>{{ product.title }}</h1
					>
				</div>

				<!-- Options -->
				<div class="mt-4 lg:row-span-3 lg:mt-0">
					<h2 class="sr-only">Product information</h2>
					<div class="flex gap-4 items-center">
						<p class="text-3xl tracking-tight text-gray-900">
							{{ displayPrice }}
						</p>
						<button class="bg-indigo-600 text-white rounded-md p-3">
							Add to Cart
						</button>
					</div>

					<!-- Reviews -->
					<div class="mt-6">
						<h3 class="sr-only">Reviews</h3>
						<div class="flex items-center">
							<div class="flex flex-col gap-1">
								<div class="flex items-center">
									<StarIcon
										v-for="rating in [0, 1, 2, 3, 4]"
										:key="rating"
										:class="[
											product.rating > rating
												? 'text-gray-900'
												: 'text-gray-200',
											'h-5 w-5 flex-shrink-0',
										]"
										aria-hidden="true"
									/>
								</div>
								<p class="sr-only">{{ product.rating }} out of 5 stars</p>
								<a
									class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
									>See reviews</a
								>
							</div>
						</div>
					</div>
				</div>

				<div
					class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
				>
					<!-- Description and details -->
					<div>
						<h3 class="sr-only">Description</h3>

						<div class="space-y-6">
							<p class="text-base text-gray-900">{{ product.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const props = defineProps({
	product: {
		type: Object,
		default: () => ({ images: [] }),
	},
});

const displayPrice = computed(() =>
	Intl.NumberFormat(navigator.language, {
		style: "currency",
		currency: "USD",
	}).format(props.product.price)
);
</script>

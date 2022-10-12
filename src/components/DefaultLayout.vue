<template>
	<div class="flex flex-col gap-2">
		<RouterLink to="/">Home Page</RouterLink>
		<RouterLink to="/cart">Cart Page</RouterLink>
		<RouterLink to="/checkout">Checkout Page</RouterLink>
		<RouterLink to="/confirmation">Confirmation Page</RouterLink>
		<RouterLink to="/product/23">Product Page</RouterLink>
		<RouterLink to="/products">Products Page</RouterLink>
		<slot></slot>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

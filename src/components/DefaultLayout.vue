<template>
	<!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
	<div class="min-h-full">
		<Disclosure
			as="nav"
			class="border-b border-gray-200 bg-zinc-800"
			v-slot="{ open }"
		>
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="flex h-16 justify-between">
					<div class="flex">
						<div class="flex flex-shrink-0 items-center">
							<img
								class="block h-8 w-auto lg:hidden"
								src="https://go.infiniaml.com/hubfs/Auditor%20LP%207-21/infinia-logo-p-500.png"
								alt="Your Company"
							/>
							<img
								class="hidden h-8 w-auto lg:block"
								src="https://go.infiniaml.com/hubfs/Auditor%20LP%207-21/infinia-logo-p-500.png"
								alt="Your Company"
							/>
						</div>
					</div>
					<div class="hidden sm:ml-6 sm:flex sm:items-center">
						<button
							type="button"
							class="rounded-full py-2 px-3 text-gray-200 hover:text-gray-100 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<RouterLink
								to="/cart"
								class="h-full w-full flex items-center gap-2"
							>
								<ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
								<span>My Cart</span>
							</RouterLink>
						</button>
					</div>
				</div>
			</div>
		</Disclosure>

		<div class="py-10">
			<main>
				<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<SearchBar class="mb-4" />
					<slot></slot>
				</div>
			</main>
		</div>
	</div>
</template>

<script setup>
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/vue";
import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
	ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
import SearchBar from "~/components/SearchBar.vue";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Calendar", href: "#", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];
</script>

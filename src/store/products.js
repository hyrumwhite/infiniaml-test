import { getDefaultMutations } from "~/assets/defaultStateMutations.js";
export const namespace = "products";

const baseUrl = "https://dummyjson.com/products/";

const state = () => ({
	products: [],
	totalProducts: 0,
	currentProduct: {},
	filter: {
		limit: 10,
		offset: 0,
	},
});

const mutations = {
	...getDefaultMutations(state),
};

const actions = {
	async searchProducts({ commit, state }, { search }) {
		const params = new URLSearchParams({ q: search });
		const response = await fetch(`${baseUrl}search?${params.toString()}`);
		if (!response.ok) {
			throw response;
		} else {
			const { products } = await response.json();
			commit("products", products);
		}
	},
	async getProducts({ commit, state }) {
		const { filter } = state;
		const params = new URLSearchParams(filter);
		const response = await fetch(`${baseUrl}?${params.toString()}`);
		if (!response.ok) {
			throw response;
		} else {
			const { products } = await response.json();
			commit("products", products);
		}
	},
	async getProduct({ commit }, { id }) {
		console.log(id);
		const response = await fetch(`${baseUrl}${id}`);
		if (!response.ok) {
			throw response;
		} else {
			const product = await response.json();
			commit("currentProduct", product);
		}
	},
};

export const products = {
	namespaced: true,
	state,
	mutations,
	actions,
};

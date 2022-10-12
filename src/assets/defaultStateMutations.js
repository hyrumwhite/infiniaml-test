const mutate = (key) => (state, val) => (state[key] = val);
/**
 * (from some of my personal code)
 * Gets a module's state object and returns basic mutations using the state variable names.
 * @param {Function | Object} state - The state function or object from a vuex module
 */
export const getDefaultMutations = (state) => {
	let defaultState = state;
	if (typeof state === "function") {
		defaultState = state();
	}
	const defaultMutations = {};
	for (let key in defaultState) {
		defaultMutations[key] = mutate(key);
	}
	return defaultMutations;
};

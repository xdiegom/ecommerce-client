export const state = () => ({
    categories: []
});

export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories;
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
        const response = await this.$axios.$get("categories");
        commit("SET_CATEGORIES", response.data);
    }
};
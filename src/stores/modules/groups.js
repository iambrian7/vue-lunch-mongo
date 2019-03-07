const state = {
	isLoading: true,
	groups: [],
}

const mutations = {
	'UPDATE_GROUPS_LIST' (state, groups) {
    console.log(`setting groups in mutations`)
    console.log(JSON.stringify(groups));
		state.groups.push(groups)
		state.isLoading = false;
	}
}

const actions = {

}

const getters = {
	groups: (state) => {
		return state.groups;
	},
	isGroupsLoading: (state) => {
		return state.isLoading;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
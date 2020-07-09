import {createSelector} from "reselect";

const getUsersSelector = (state) => {
	return state.usersPage.users
};

export const getUsers = createSelector(getUsersSelector, (users) => {
	return users.filter(u => true)
});

// export const getUsers = (state) => {
// 	return state.usersPage.users.filter(u => true)
// };

export const getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount
};
export const getCurrentPage = (state) => {
	return state.usersPage.currentPage
};
export const getPageSize = (state) => {
	return state.usersPage.pageSize
};
export const getIsFetching = (state) => {
	return state.usersPage.isFetching
};
export const getCurrentPageInterval = (state) => {
	return state.usersPage.currentPageInterval
};
export const getIntervalSize = (state) => {
	return state.usersPage.intervalSize
};
export const getInFollowingProgress = (state) => {
	return state.usersPage.inFollowingProgress
};
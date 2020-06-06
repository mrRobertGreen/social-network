const TOGGLE_IS_FOLLOWED = "TOGGLE_IS_FOLLOWED";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_CURRENT_INTERVAL_PAGE = "TOGGLE_CURRENT_INTERVAL_PAGE";

let initialState = {
	users: [],
	totalUsersCount: 0,
	currentPage: 1,
	pageSize: 5,
	currentPageInterval: 0,
	pageIntervalSize: 10,
	isFetching: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_FOLLOWED: {
			debugger
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						user.followed = !user.followed;
						return user
					}
					return user
				})
			};
		}
		case SET_USERS:
			return {
				...state,
				users: action.users
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			};
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: !state.isFetching,
			};
		case TOGGLE_CURRENT_INTERVAL_PAGE:
			if (action.direction === "right" && (state.currentPageInterval < Math.ceil(state.totalUsersCount / state.pageSize))) {
				return {
					...state,
					currentPageInterval: state.currentPageInterval + 1
				};
			} else if (action.direction === "left" && (state.currentPageInterval > 0)) {
				return {
					...state,
					currentPageInterval: state.currentPageInterval - 1
				};
			}
			return {
				...state,
			};
		default:
			return state;
	}
};

export default usersReducer;

export const toggleIsFollowed = (id) => ({type: TOGGLE_IS_FOLLOWED, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const toggleCurrentIntervalPage = (direction) => ({type: TOGGLE_CURRENT_INTERVAL_PAGE, direction});
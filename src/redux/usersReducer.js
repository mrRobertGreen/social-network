import {usersAPI} from "../api/api";

const TOGGLE_IS_FOLLOWED = "TOGGLE_IS_FOLLOWED";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
	users: [],
	totalUsersCount: 0,
	currentPage: 1,
	pageSize: 5,
	intervalSize: 30,
	isFetching: false,
	inFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_FOLLOWED: {
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
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				inFollowingProgress: action.isFollowingProgress
					? [...state.inFollowingProgress, action.id]
					: state.inFollowingProgress.filter(id => id !== action.id)
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
export const toggleIsFollowingProgress = (isFollowingProgress, id) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingProgress, id});

export const requestUsers = (pageSize, currentPage) => {
	return (dispatch) => {
		dispatch(toggleIsFetching());
		usersAPI.getUsers(pageSize, currentPage)
			.then(data => {
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
				dispatch(toggleIsFetching());
			});
	}
};

const followingFlow = (userId, APIMethod) => {
	return (dispatch) => {dispatch(toggleIsFollowingProgress(true, userId));
		APIMethod(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(toggleIsFollowed(userId));
			}
			dispatch(toggleIsFollowingProgress(false, userId));
		})
	}
}

export const followRequest = (id) => {
	let APIMethod = usersAPI.follow;
	return followingFlow(id, APIMethod)
};

export const unfollowRequest = (id) => {
	let APIMethod = usersAPI.unfollow;
	return followingFlow(id, APIMethod)
};


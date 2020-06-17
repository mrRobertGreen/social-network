import {authAPI, usersAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
	id: null,
	email: null,
	login: null,
	avatar: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA: {
			return {
				...state,
				...action.data,
				isAuth: true,
			};
		}
		default:
			return state;
	}
};

export default authReducer;

export const setAuthUserData = (id, email, login, avatar) => ({type: SET_AUTH_USER_DATA, data: {id, email, login, avatar}});

export const getAuthUserData = () => {
	return (dispatch) => {
		authAPI.authMe()
			.then(data => {
				if (data.resultCode === 0) {
					let {id, email, login} = {...data.data};
					usersAPI.getProfile(id)
						.then(data => {
							dispatch(setAuthUserData(id, email, login, data.photos.small));
						});
				}
			});
	}
};
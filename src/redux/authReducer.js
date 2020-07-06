import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import userAvatar from "../assets/images/user.jpg"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_AUTH_USER_AVATAR = "SET_AUTH_USER_AVATAR";

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
				...action.payload,
			};
		}
		case SET_AUTH_USER_AVATAR: {
			return {
				...state,
				avatar: action.avatar,
			};
		}
		default:
			return state;
	}
};

export default authReducer;

export const setAuthUserData = (id, email, login, avatar, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {id, email, login, avatar, isAuth}});
export const setAuthUserAvatar = (avatar) => ({type: SET_AUTH_USER_AVATAR, avatar});

export const getAuthUserData = () => {
	return (dispatch) => {
		 return authAPI.authMe()
			.then(data => {
				if (data.resultCode === 0) {
					let {id, email, login} = {...data.data};
					dispatch(setAuthUserData(id, email, login, userAvatar, true))
				}
			});
	}
};

export const getAuthUserAvatar = () => {
	return (dispatch) => {
		return profileAPI.getProfile(8603)
			.then(data => {
				dispatch(setAuthUserAvatar(data.photos.small));
			});
	}
};

export const logIn = (email, password, rememberMe, captcha) => {
	return (dispatch) => {
		authAPI.logIn(email, password, rememberMe, captcha)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(getAuthUserData())
				} else if (data.messages.length > 0) {
					dispatch(stopSubmit("login", {_error: data.messages[0]}))
				} else {
					dispatch(stopSubmit("login", {_error: "Some error"}))
				}
			});
	}
};

export const logOut = () => {
	return (dispatch) => {
		authAPI.logOut()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, null, false))
				}
			});
	}
};
import {profileAPI, usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const ADD_LIKE = "ADD-LIKE";
const SET_PROFILE = "SET_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
	postsData: [
		{id: 1, message: "Hello! How are you?", likesCount: 13, isLiked: false},
		{id: 2, message: "It's my first post", likesCount: 54, isLiked: false},
	],
	profile: null,
	userStatus: "",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			if (action.newPostText) {
				let newPost = {
					id: state.postsData.length + 1,
					message: action.newPostText,
					likesCount: 0,
					isLiked: false,
				};

				return {
					...state,
					postsData: [...state.postsData, newPost]
				};
			}
			return state;
		case ADD_LIKE:
			let stateCopy = {...state};
			stateCopy.postsData = [...state.postsData];

			let likedPost = stateCopy.postsData.find(item => item.id === action.id);
			likedPost.isLiked ? likedPost.likesCount -= 1 : likedPost.likesCount += 1;
			likedPost.isLiked = !likedPost.isLiked;

			return stateCopy;
		case SET_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case SET_USER_STATUS:
			return {
				...state,
				userStatus: action.status,
			};
		default:
			return state;
	}
};

export default profileReducer;

export const addLike = (id) => ({type: ADD_LIKE, id: id});
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId)
			.then(data => {
				dispatch(setProfile(data));
			});
	}
};

export const getUserStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getUserStatus(userId)
			.then(data => {
				dispatch(setUserStatus(data));
			});
	}
};

export const updateUserStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateUserStatus(status)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setUserStatus(status));
				}
			});
	}
};
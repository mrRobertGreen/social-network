const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const ADD_LIKE = "ADD-LIKE";
const SET_PROFILE = "SET_PROFILE";

let initialState = {
	postsData: [
		{id: 1, message: "Hello! How are you?", likesCount: 13, isLiked: false},
		{id: 2, message: "It's my first post", likesCount: 54, isLiked: false},
	],
	newPostText: "",
	profile: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.text
			};
		}
		case ADD_POST:
			if (state.newPostText) {
				let newPost = {
					id: state.postsData.length + 1,
					message: state.newPostText,
					likesCount: 0,
					isLiked: false,
				};

				return {
					...state,
					newPostText: "",
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
				profile: action.profile
			};
		default:
			return state;
	}
};

export default profileReducer;

export const addLike = (id) => ({type: ADD_LIKE, id: id});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const addPost = () => ({type: ADD_POST});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
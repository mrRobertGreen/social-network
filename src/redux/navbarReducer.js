import {users} from "./usersState";

const SET_FOLLOWING = "SET_FOLLOWING";

let initialState = {
	sectionData: [
		{name: "Profile", link: "/profile"},
		{name: "Dialogs", link: "/dialogs"},
		{name: "Users", link: "/users"},
		{name: "News", link: "/news"},
		{name: "Music", link: "/music"},
		{name: "Settings", link: "/settings"},
	],
	following: []
};

const navBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FOLLOWING:
			return {
				...state,
				following: action.following,
			};
		default:
			return {...state}
	}
};

const setFollowing = (following) => ({type: SET_FOLLOWING, following});

export default navBarReducer;
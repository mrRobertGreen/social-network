import {users} from "./usersState";

let initialState = {
	sectionData: [
		{name: "Profile", link: "/profile"},
		{name: "Dialogs", link: "/dialogs"},
		{name: "Users", link: "/users"},
		{name: "News", link: "/news"},
		{name: "Music", link: "/music"},
		{name: "Settings", link: "/settings"},
	],
	friendsData: users.filter(item => item.isFriend)
};

const navBarReducer = (state = initialState, action) => {
	return {...state}
};

export default navBarReducer;
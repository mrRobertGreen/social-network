import {users} from "./usersState";

const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
	messagesData: [
		{text: "Yo!"},
		{text: "Hey!"},
		{text: "Wasap!"},
	],
	users: users,
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
		let newMessage = {
			text: action.newMessageText,
		};
		return {
			...state,
			messagesData: [...state.messagesData, newMessage],
		};
		default:
			return state;
	}
};

export default dialogsReducer;

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});
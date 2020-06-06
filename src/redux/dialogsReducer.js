import {users} from "./usersState";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
	messagesData: [
		{text: "Yo!"},
		{text: "Hey!"},
		{text: "Wasap!"},
	],
	newMessageText: "",
	users: users,
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT: {
			return {
				...state,
				newMessageText: action.text
			};
		}
		case SEND_MESSAGE:
			if (state.newMessageText) {
				let newMessage = {
					text: state.newMessageText,
				};

				return {
					...state,
					messagesData: [...state.messagesData, newMessage],
					newMessageText: "",
				};
			}
			return state;
		default:
			return state;
	}
};

export default dialogsReducer;

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let store = {
	_callSubscriber() {
		console.log("qqq")
	},
	_state: {
		dialogsPage: {
			messagesData: [
				{text: "Yo!"},
				{text: "Hey!"},
				{text: "Wasap!"},
			],
			newMessageText: "",
		},
		profilePage: {
			postsData: [
				{id: 1, message: "Hello! How are you?", likesCount: 13},
				{id: 2, message: "It's my first post", likesCount: 54},
			],
			newPostText: "",
		},
		navBar: {
			sectionData: [
				{name: "Profile", link: "/profile"},
				{name: "Dialogs", link: "/dialogs"},
				{name: "News", link: "/news"},
				{name: "Music", link: "/music"},
				{name: "Settings", link: "/settings"},
			],
		},
		friendsData: [
			{
				"name": "Dimon",
				"id": 1,
				avatar: "https://avatars.mds.yandex.net/get-pdb/1025945/86f10e6d-eab5-4572-8c07-c672b854d2a5/s1200?webp=false"
			},
			{
				"name": "Masha",
				"id": 2,
				avatar: "https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false"
			},
			{"name": "Lesha", "id": 3, avatar: "https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg"},
		]
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatcher(action) {
		switch (action.type) {
			case (UPDATE_NEW_MESSAGE_TEXT):
				this._state.dialogsPage.newMessageText = action.text;
				this._callSubscriber(this._state);
				break;
			case (SEND_MESSAGE):
				let newMessage = {
					text: this._state.dialogsPage.newMessageText,
				};
				this._state.dialogsPage.messagesData.push(newMessage);
				this._state.dialogsPage.newMessageText = "";
				this._callSubscriber(this._state);
				break;
			case (ADD_POST):
				let newPost = {
					id: this._state.profilePage.postsData.length + 1,
					message: this._state.profilePage.newPostText,
					likesCount: 0,
				};
				this._state.profilePage.postsData.push(newPost);
				this._state.profilePage.newPostText = "";
				this._callSubscriber(this._state);
				break;
			case (UPDATE_NEW_POST_TEXT):
				this._state.profilePage.newPostText = action.text;
				this._callSubscriber(this._state);
				break;
			default:
				break;
		}
	}
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export const addPostActionCreator = () => ({type: ADD_POST});

export default store;
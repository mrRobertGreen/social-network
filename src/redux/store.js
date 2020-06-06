import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state)
	}
};

export default store;
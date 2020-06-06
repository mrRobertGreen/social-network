import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navBarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	navBar: navBarReducer,
	usersPage: usersReducer,
	auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
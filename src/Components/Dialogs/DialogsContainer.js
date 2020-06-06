import React from "react";
import {updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {sendMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
	onSendMessage() {
		dispatch(sendMessageActionCreator())
	},
	onChangeNewMessageText(text) {
		dispatch(updateNewMessageTextActionCreator(text))
	},
});

const mapStateToProps = (state) => ({
	messages: state.dialogsPage.messagesData,
	newMessageText: state.dialogsPage.newMessageText,
	users: state.dialogsPage.users,
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
import React from "react";
import {sendMessage, updateNewMessageText, } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {compose} from "redux";

const mapDispatchToProps = {
	sendMessage,
	updateNewMessageText,
};

const mapStateToProps = (state) => ({
	messages: state.dialogsPage.messagesData,
	newMessageText: state.dialogsPage.newMessageText,
	users: state.dialogsPage.users,
});

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);
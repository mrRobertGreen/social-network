import React from "react";
import {sendMessage } from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {compose} from "redux";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./dialogs.module.css";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {reset} from "redux-form";

const Dialogs = (props) => {
	let dialogElements = props.users.map(dialog => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)),
		messageElements = props.messages.map(message => <MessageItem text={message.text}/>);

	const onSendMessage = (formData) => {
		props.sendMessage(formData.newMessageText);
		props.reset("AddMessageForm");
	};

	return (
		<div className={style.wrapper}>
			<div className={style.dialogItems}>
				{dialogElements}
			</div>
			<div className={style.messageItems}>
				{messageElements}
				<div className={style.sendMessage}>
					<AddMessageForm onSubmit={onSendMessage}/>
				</div>
			</div>

		</div>
	);
};


const mapDispatchToProps = {
	sendMessage,
	reset,
};

const mapStateToProps = (state) => ({
	messages: state.dialogsPage.messagesData,
	users: state.dialogsPage.users,
});

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);
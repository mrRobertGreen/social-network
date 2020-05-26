import React from "react";
import style from "./dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

	let dialogElements = props.friends.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)),
			messageElements = props.state.messagesData.map(message => <MessageItem text={message.text}/>);

	let textAreaElement = React.createRef();

	let sendMessage = () => {
		let text = textAreaElement.current.value;
		if (text) {
			props.dispatcher(sendMessageActionCreator());
		}
	};

	let updateNewMessageText = () => {
		let text = textAreaElement.current.value;
		props.dispatcher(updateNewMessageTextActionCreator(text));
	};

	return (
		<div className={style.wrapper}>
			<div className={style.dialogItems}>
				{dialogElements}
			</div>
			<div className={style.messageItems}>
				{messageElements}
				<div className={style.sendMessage}>
					<div className={style.input}>
						<textarea ref={textAreaElement} value={props.state.newMessageText} onChange={updateNewMessageText}/>
					</div>
					<div className={style.sendButton}><button onClick={sendMessage}>Send</button></div>
				</div>
			</div>

		</div>
	);
};

export default Dialogs;
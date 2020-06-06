import React from "react";
import style from "./dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
	let dialogElements = props.users.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)),
			messageElements = props.messages.map(message => <MessageItem text={message.text}/>);

	let onSendMessage = () => {
		props.onSendMessage()
	};

	let onChangeNewMessageText = (event) => {
		let text = event.target.value;
		props.onChangeNewMessageText(text);
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
						<textarea value={props.newMessageText} onChange={onChangeNewMessageText}/>
					</div>
					<div className={style.sendButton}><button onClick={onSendMessage}>Send</button></div>
				</div>
			</div>

		</div>
	);
};

export default Dialogs;
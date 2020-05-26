import style from "./messageItem.module.css";
import React from "react";

const MessageItem = (props) => {
	return (
		<div className={style.wrapper}>
			<div className={style.item}>{props.text}</div>
		</div>
	)
};

export default MessageItem;
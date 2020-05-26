import style from "./dialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
	return (
		<div className={style.wrapper}>
			<div className={style.avatar}>
				<img src={props.avatar} ></img>
			</div>
			<div className={style.name}>
				<NavLink to={`/dialogs/${props.id}`} className={style.item}>{props.name}</NavLink>
			</div>
		</div>
	)
};

export default DialogItem;
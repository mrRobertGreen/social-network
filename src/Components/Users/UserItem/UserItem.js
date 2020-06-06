import React from "react";
import style from "../users.module.css"
import * as axios from "axios";

const UserItem = (props) => {
	const getUsers = () => {
		if (props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
				props.setUsers(response.data.items)
			});
		}
	};
	return (
		<div className={style.wrapper}>
			<div className={style.avatar}>
				<img src={props.photo}/>
			</div>
			<div className={style.userName}>
				{props.name}
			</div>
			<div className={style.status}>
				{props.status}
			</div>
			<div className={style.location}>
				<div>
					{"props.location.city"}
				</div>
				<div>
					{"props.location.country"}
				</div>
			</div>
			<div className={style.followBtn}>
				<button onClick={() => props.followToggle(props.userId)}>
					{props.followed ? "Unfollow" : "Follow"}
				</button>
			</div>
		</div>
	)
};

export default UserItem;
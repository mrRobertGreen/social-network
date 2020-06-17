import React from "react";
import style from "./followingItem.module.css"
import {NavLink} from "react-router-dom";

const FollowingItem = (props) => {
	let avatars = props.following.map(user => <img src={user.avatar}></img>),
		names = props.following.map(user => <NavLink to="" className={style.name}>{user.name}</NavLink>);

	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<NavLink to="/following" activeClassName={style.active}>Following</NavLink>
			</div>
			<div className={style.friends}>
				<div className={style.avatars}>
					{avatars}
				</div>
				<div className={style.names}>
					{names}
				</div>
			</div>
		</div>
	)
};

export default FollowingItem;
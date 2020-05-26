import React from "react";
import style from "./friendsItem.module.css"
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {

	let avatars = props.friends.map(friend => <img src={friend.avatar}></img>),
			names = props.friends.map(friend => <NavLink to="" className={style.name}>{friend.name}</NavLink>)

	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<NavLink to="/friends" activeClassName={style.active}>Friends</NavLink>
			</div>
			<div className={style.avatars}>
				{avatars}
				{names}
			</div>
		</div>
	)
};

export default FriendsItem;
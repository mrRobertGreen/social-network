import React from "react";
import style from "./userItem.module.css"
import {NavLink} from "react-router-dom";
import userAvatar from "../../../assets/images/user.jpg";

const UserItem = ({user, ...props}) => {

	return (
		<div key={user.id} className={style.wrapper}>
			<NavLink to={`profile/${user.id}`}>
				<div className={style.avatar}>
					<img src={user.photos.small ? user.photos.small : userAvatar}/>
				</div>
			</NavLink>

			<div className={style.userName}>
				{user.name}
			</div>
			<div className={style.status}>
				{user.status ? user.status : "no status"}
			</div>
			<div className={style.location}>
				<div>
					{"this.props.location.city"}
				</div>
				<div>
					{"this.props.location.country"}
				</div>
			</div>
			<div className={style.followBtn}>
				{
					user.followed ?
						<button disabled={props.inFollowingProgress.some(id => id === user.id)}
						        onClick={() => props.unfollowThunk(user.id)}>
							Unfollow
						</button> :
						<button disabled={props.inFollowingProgress.some(id => id === user.id)}
						        onClick={() => props.followThunk(user.id)}>
							Follow
						</button>
				}
			</div>
		</div>
	)
};

export default UserItem;
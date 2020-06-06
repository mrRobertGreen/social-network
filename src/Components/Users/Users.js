import React from "react";
import userAvatar from "../../assets/images/user.jpg"
import style from "./users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
	// let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for (let i=props.currentPageInterval*10; i < props.currentPageInterval*10+props.pageIntervalSize; i++) {
		pages.push(i+1);
	}

	return (
		<div>
			<div>
				<span onClick={() => props.toggleCurrentIntervalPage("left")}>{"<"}</span>
				{pages.map(pageNumber => (<span
					onClick={() => props.onPageChanged(pageNumber)}
					className={props.currentPage === pageNumber && style.selectedPage}>{pageNumber}
					</span>))}
				<span onClick={() => props.toggleCurrentIntervalPage("right")}>{">"}</span>
			</div>

			{
				props.users.map(user => (
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
							<button onClick={() => props.toggleIsFollowed(user.id)}>
								{user.followed ? "Unfollow" : "Follow"}
							</button>
						</div>
					</div>))
			}
		</div>
	)
};


export default Users;
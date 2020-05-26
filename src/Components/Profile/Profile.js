import React from "react";
import style from "./profile.module.css"
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfiileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className={style.wrapper}>
			<ProfileInfo/>
			<MyPosts state={props.state}
			         dispatcher={props.dispatcher}/>
		</div>
	)
};

export default Profile;
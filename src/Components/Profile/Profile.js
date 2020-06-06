import React from "react";
import style from "./profile.module.css"
import ProfileInfo from "./ProfiileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className={style.wrapper}>
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer/>
		</div>
	)
};

export default Profile;
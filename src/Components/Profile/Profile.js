import React from "react";
import style from "./profile.module.css"
import MyPosts from "./Posts/MyPosts";
import Preloader from "../common/Preloader/Preloader";
import ProfileInfo from "./ProfiileInfo/ProfileInfo";

const Profile = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className={style.wrapper}>
			<ProfileInfo {...props}/>
			<MyPosts/>
		</div>
	)
};

export default Profile;
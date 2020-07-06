import React from "react";
import style from "./profile.module.css"
import MyPosts from "./Posts/MyPosts";
import Preloader from "../common/Preloader/Preloader";
import ProfileInfoWithHooks from "./ProfiileInfo/ProfileInfoWithHooks";

const Profile = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className={style.wrapper}>
			<ProfileInfoWithHooks {...props}/>
			<MyPosts/>
		</div>
	)
};

export default Profile;
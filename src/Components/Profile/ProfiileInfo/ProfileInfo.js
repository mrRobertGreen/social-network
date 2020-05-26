import style from "./profileinfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
	return (
		<div className={style.wrapper}>
			<div>
				<img src="https://www.1zoom.me/big2/582/255388-svetik.jpg"></img>
			</div>
			<div className={style.description}>
				ava + description
			</div>
			{/*<div className={style.addPost}>*/}
			{/*	<div>*/}
			{/*		<textarea></textarea>*/}
			{/*	</div>*/}
			{/*	<div>*/}
			{/*		<button>Add Post</button>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>
	)
};

export default ProfileInfo;
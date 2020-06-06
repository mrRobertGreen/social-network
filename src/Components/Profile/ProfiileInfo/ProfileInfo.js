import style from "./profileinfo.module.css";
import React from "react";
import defaultAvatar from "../../../assets/images/user.jpg"

const ProfileInfo = (props) => {
	return (
		<div className={style.wrapper}>
			<div>
				<img src={"https://www.1zoom.me/big2/582/255388-svetik.jpg"}></img>
			</div>
			<div className={style.profileInfo}>
				<div className={style.avatar}>
					<img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}/>
				</div>
				<div className={style.description}>
					<div className={style.fullName}>
						{props.profile.fullName}
					</div>
					<div className={style.aboutMe}>
						{props.profile.aboutMe}
					</div>
					<div className={style.contacts}>
						<div>{`facebook: ${props.profile.contacts.facebook}`}</div>
						<div>{`website: ${props.profile.contacts.website}`}</div>
						<div>{`vk: ${props.profile.contacts.vk}`}</div>
						<div>{`twitter: ${props.profile.contacts.twitter}`}</div>
					</div>					

				</div>

			</div>
		</div>
	)
};

export default ProfileInfo;
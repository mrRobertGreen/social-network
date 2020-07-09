import style from "./profileinfo.module.css";
import React from "react";
import defaultAvatar from "../../../assets/images/user.jpg"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({userStatus, updateUserStatus, ...props}) => {

	return (
		<div className={style.wrapper}>
			<div className={style.profileInfo}>
				<div className={style.avatar}>
					<img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}/>
				</div>
				<div className={style.description}>
					<div className={style.fullName}>
						{props.profile.fullName}
					</div>
					<div className={style.aboutMe}>
						<ProfileStatus
							userStatus={userStatus}
							updateUserStatus={updateUserStatus}
						/>
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
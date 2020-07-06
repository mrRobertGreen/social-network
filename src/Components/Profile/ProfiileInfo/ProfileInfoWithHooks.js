import style from "./profileinfo.module.css";
import React, {useEffect, useState} from "react";
import defaultAvatar from "../../../assets/images/user.jpg"

const ProfileInfoWithHooks = (props) => {
	const [statusEdit, setStatusEdit] = useState(false);
	const [userStatus, setUserStatus] = useState(props.userStatus);

	useEffect(() => {
		setUserStatus(props.userStatus)
	}, [props.userStatus]);

	const activateStatusEdit = () => {
		setStatusEdit(true)
	};

	const deactivateStatusEdit = () => {
		setStatusEdit(false);
		props.updateUserStatus(userStatus)
	};

	const onChangeUserStatus = (event) => {
		setUserStatus(event.target.value)
	};

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
						{!statusEdit &&
						<div className={style.status}>
							<span onDoubleClick={activateStatusEdit}>{props.userStatus || "no status"}</span>
						</div>
						}
						{statusEdit &&
						<div className={style.statusInput}>
							<input autoFocus={true}
							       onBlur={deactivateStatusEdit}
							       value={userStatus}
							       onChange={onChangeUserStatus}
							/>
						</div>
						}
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

export default ProfileInfoWithHooks;
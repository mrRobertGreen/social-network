import style from "../profileinfo.module.css";
import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [userStatus, setUserStatus] = useState(props.userStatus);

	useEffect(() => {
		setUserStatus(props.userStatus)
	}, [props.userStatus]);

	const activateStatusEdit = () => {
		setEditMode(true)
	};

	const deactivateStatusEdit = () => {
		setEditMode(false);
		props.updateUserStatus(userStatus)
	};

	const onChangeUserStatus = (event) => {
		setUserStatus(event.target.value)
	};

	return (
		<div className={style.wrapper}>
			{!editMode &&
			<div className={style.status}>
				<span onDoubleClick={activateStatusEdit}>{props.userStatus || "no status"}</span>
			</div>
			}
			{editMode &&
			<div className={style.statusInput}>
				<input autoFocus={true}
				       onBlur={deactivateStatusEdit}
				       value={userStatus}
				       onChange={onChangeUserStatus}
				/>
			</div>
			}
		</div>
	)
};

export default ProfileStatus;
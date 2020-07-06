import style from "./profileinfo.module.css";
import React from "react";
import defaultAvatar from "../../../assets/images/user.jpg"

class ProfileInfo extends React.Component {
	state = {
		statusEdit: false,
		userStatus: this.props.userStatus,
	};

	activateStatusEdit = () => {
		this.setState({
			statusEdit: true,
		})
	};

	deactivateStatusEdit = () => {
		this.setState({
			statusEdit: false,
		});
		this.props.updateUserStatus(this.state.userStatus)
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.userStatus !== this.props.userStatus) {
			this.setState({userStatus: this.props.userStatus})
		}
	}

	onChangeUserStatus = (event) => {
		this.setState({
			userStatus: event.currentTarget.value
		})
	};

	render() {
		return (
			<div className={style.wrapper}>
				<div className={style.profileInfo}>
					<div className={style.avatar}>
						<img src={this.props.profile.photos.large ? this.props.profile.photos.large : defaultAvatar}/>
					</div>
					<div className={style.description}>
						<div className={style.fullName}>
							{this.props.profile.fullName}
						</div>
						<div className={style.aboutMe}>
							{!this.state.statusEdit &&
							<div className={style.status}>
								<span onDoubleClick={this.activateStatusEdit}>{this.state.userStatus || "no status"}</span>
							</div>
							}
							{this.state.statusEdit &&
							<div className={style.statusInput}>
								<input onChange={this.onChangeUserStatus}
								       autoFocus={true}
								       onBlur={this.deactivateStatusEdit}
								       value={this.state.userStatus}/>
							</div>
							}
						</div>

						<div className={style.contacts}>
							<div>{`facebook: ${this.props.profile.contacts.facebook}`}</div>
							<div>{`website: ${this.props.profile.contacts.website}`}</div>
							<div>{`vk: ${this.props.profile.contacts.vk}`}</div>
							<div>{`twitter: ${this.props.profile.contacts.twitter}`}</div>
						</div>

					</div>

				</div>
			</div>
		)
	}
}

export default ProfileInfo;
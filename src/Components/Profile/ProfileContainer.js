import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authUserId;
		}
		this.props.getProfile(userId);
		this.props.getUserStatus(userId)
	}

	render() {
		return <Profile
			profile={this.props.profile}
			userStatus={this.props.userStatus}
			updateUserStatus={this.props.updateUserStatus}
		/>
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.match.params !== this.props.match.params){
			let userId = this.props.match.params.userId;
			if (!userId) {
				userId = this.props.authUserId;
				this.props.getProfile(userId);
				this.props.getUserStatus(userId);
			}
		}
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	authUserId: state.auth.id,
	userStatus: state.profilePage.userStatus,
});


export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
	withRouter,
)
(ProfileContainer);
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authUserId;
		}
		this.props.getProfile(userId)
	}

	render() {
		return <Profile profile={this.props.profile}/>
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	authUserId: state.auth.id,
});


export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {getProfile}),
	withRouter,
)
(ProfileContainer);
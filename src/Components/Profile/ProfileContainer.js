import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authUserId;
		}
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setProfile(response.data);
			});
	}

	render() {
		return <Profile profile={this.props.profile}/>
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	authUserId: state.auth.id,
});

const WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(WithUrlDataContainer);
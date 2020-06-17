import * as React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

const mapStateToPropsForAuthRedirect = (state) =>( {
	isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
	class withAuthRedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) {
				return <Redirect to="/login"/>
			}
			return <Component props={this.props}/>
		}
	}

	return connect(mapStateToPropsForAuthRedirect)(withAuthRedirectComponent);
};
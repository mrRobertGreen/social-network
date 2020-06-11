import React from "react";
import style from "./header.module.css"
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true,
			})
			.then(response => {
				if (response.data.resultCode === 0) {
					let {id, email, login} = {...response.data.data};
					axios.get(
						`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
						.then(response => {
							this.props.setAuthUserData(id, email, login, response.data.photos.small)
						});
				}
			});
	}

	render() {
		return <Header {...this.props}/>
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	avatar: state.auth.avatar,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
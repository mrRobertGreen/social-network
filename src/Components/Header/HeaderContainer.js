import React from "react";
import style from "./header.module.css"
import Header from "./Header";
import * as axios from "axios";

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true,
			})
			.then(response => {
				debugger;
				// this.props.setProfile(response.data);
			});
	}

	render() {
		return <Header/>
	}
}

export default HeaderContainer;
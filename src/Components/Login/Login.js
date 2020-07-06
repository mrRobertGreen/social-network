import React from "react";
import loginStyle from "./login.module.css"
import {connect} from "react-redux";
import {logIn} from "../../redux/authReducer";
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from "react-router";
import {compose} from "redux";

export const Login = (props) => {
	const onSubmit = (formData) => {
		props.logIn(
			formData.email,
			formData.password,
			formData.rememberMe,
			true,
		)
	};

	if (props.isAuth) return <Redirect to={"/profile"}/>;

	return (
		<div className={loginStyle.wrapper}>
			<div>
				<h2>Login</h2>
			</div>
			<div>
				<LoginForm onSubmit={onSubmit}/>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default compose(
	connect(mapStateToProps, {logIn})
)(Login)
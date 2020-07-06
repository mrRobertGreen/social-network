import React from "react";
import { Field, reduxForm } from 'redux-form'
import formStyle from "./loginForm.module.css"
import {validateField} from "../../common/FormControls/FormControls";
import {required} from "../../../utils/validators/formValidators";

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={formStyle.wrapper}>
			<div className={formStyle.item}>
				<Field name={"email"}
				       component={validateField}
				       validate={[required]}
				       placeholder={"Email"}
				       field={"input"}/>
			</div>
			<div className={formStyle.item}>
				<Field name={"password"}
				       validate={[required]}
				       component={validateField}
				       placeholder={"Password"}
				       field={"input"}/>
			</div>
			<div className={formStyle.item}>
				<Field name={"rememberMe"} component="input" type={"checkbox"}/>Remember me
			</div>
			{props.error && <div>{props.error}</div>}
			<div className={formStyle.item}>
				<button>Login</button>
			</div>
		</form>
	)
};

export default reduxForm({form: "login"})(LoginForm);

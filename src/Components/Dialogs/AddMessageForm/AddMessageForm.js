import React from "react";
import style from "../dialogs.module.css"
import {Field, reduxForm} from "redux-form";
import {validateField} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/formValidators";

const maxLength10 = maxLengthCreator(10);

let AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={validateField}
				       name={"newMessageText"}
				       placeholder={"Your message"}
				       field={"textarea"}
				       validate={[required, maxLength10]}
				/>
			</div>
			<div className={style.sendButton}>
				<button>Send</button>
			</div>
		</form>
	)
};

export default reduxForm({form: "AddMessageForm"})(AddMessageForm);
import React from "react";
import style from "./addNewPostForm.module.css"
import {Field, reduxForm} from "redux-form";
import {validateField} from "../../../common/FormControls/FormControls";
import {required} from "../../../../utils/validators/formValidators";

const AddNewPostForm = (props) => {
	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<div className={style.item}>
				<Field component={validateField}
				       name={"newPostText"}
				       validate={[required]}
				       field={"textarea"}/>
			</div>
			<div className={style.item}>
				<button>Add Post</button>
			</div>
		</form>
	)
};

export default reduxForm({form: "post"})(AddNewPostForm);
import React from "react";

export const validateField = ({input, meta, field, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div>
			<div>
				{field === "input" && <input {...input} {...props}/>}
				{field === "textarea" && <textarea {...input} {...props}/>}
			</div>
			<div>
				{hasError && <span>{meta.error}</span>}
			</div>
		</div>
	)
};
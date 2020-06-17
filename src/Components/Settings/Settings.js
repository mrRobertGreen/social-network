import React from "react";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";

const Settings = () => {
	return (
		<div>
			Settings
		</div>
	)
};

export default withAuthRedirect(Settings);
import React from "react";
import style from "./header.module.css"
import userAvatar from "../../assets/images/user.jpg"

const Header = (props) => {
	return (
		<header className={style.header}>
			<img src="https://c7.hotpng.com/preview/197/457/272/5bbc13012ff31.jpg"></img>
			{!props.isAuth ?
				<div className={style.login}>
					"Login"
				</div> :
				<div className={style.miniProfile}>
					<div className={style.login}>
						{props.login}
					</div>
					<div className={style.avatar}>
						<img src={props.avatar ? props.avatar : userAvatar}/>
					</div>
				</div>}
		</header>
	);
};

export default Header;
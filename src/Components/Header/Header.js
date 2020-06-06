import React from "react";
import style from "./header.module.css"

const Header = () => {
	return (
		<header className={style.header}>
			<img src="https://c7.hotpng.com/preview/197/457/272/5bbc13012ff31.jpg"></img>
			<div className={style.login}>Login</div>
		</header>
	);
};

export default Header;
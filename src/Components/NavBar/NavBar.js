import React from "react";
import style from "./navbar.module.css"
import {NavLink} from "react-router-dom";
import FriendsItem from "./Friends/FriendsItem";

const NavBar = (props) => {

	let sectionElements = props.sections.map(section => (
		<div className={style.item}>
				<NavLink to={section.link} activeClassName={style.active}>{section.name}</NavLink>
		</div>
		)
	);

	return (
		<nav className={style.nav}>
			{sectionElements}
			<FriendsItem friends={props.friends}/>
		</nav>
	);
};

export default NavBar;
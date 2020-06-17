import React from "react";
import style from "./navbar.module.css"
import {NavLink} from "react-router-dom";
import FollowingItem from "./Following/FollowingItem";

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
			<FollowingItem following={props.following}/>
		</nav>
	);
};

export default NavBar;
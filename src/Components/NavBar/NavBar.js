import React from "react";
import {connect} from "react-redux";
import style from "./navbar.module.css";
import {NavLink} from "react-router-dom";
import FollowingItem from "./Following/FollowingItem";

const NavBar = (props) => {
	const sections = [
		{name: "Profile", link: "/profile"},
		{name: "Dialogs", link: "/dialogs"},
		{name: "Users", link: "/users"},
		{name: "News", link: "/news"},
		{name: "Music", link: "/music"},
		{name: "Settings", link: "/settings"},
	];

	let sectionElements = sections.map((section, i) => (
			<div key={i} className={style.item}>
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

const mapStateToProps = (state) => ({
	following: []
});

export default connect(mapStateToProps, null)(NavBar)
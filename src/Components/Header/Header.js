import React from "react";
import {connect} from "react-redux";
import {logOut} from "../../redux/authReducer";
import style from "./header.module.css";
import userAvatar from "../../assets/images/user.jpg";

const Header = (props) => {
	return (
		<header className={style.header}>
			<img src="https://c7.hotpng.com/preview/197/457/272/5bbc13012ff31.jpg"/>
			{!props.isAuth ?
				<div className={style.login}>
					Log In
				</div> :
				<div className={style.miniProfile}>
					<div className={style.logOutBtn}>
						<button onClick={props.logOut}>Log Out</button>
					</div>
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


const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	avatar: state.auth.avatar,
});

export default connect(mapStateToProps, {logOut})(Header);
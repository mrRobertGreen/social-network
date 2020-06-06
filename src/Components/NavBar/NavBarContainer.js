import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar";

const mapStateToProps = (state) => ({
	sections: state.navBar.sectionData,
	friends: state.navBar.friendsData,
});

export default connect(mapStateToProps)(NavBar)
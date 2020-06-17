import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar";

class NavBarContainer extends React.Component {
	componentDidMount() {

	}

	render() {
		return <NavBar {...this.props}/>
	}
}

const mapStateToProps = (state) => ({
	sections: state.navBar.sectionData,
	following: state.navBar.following,
});

export default connect(mapStateToProps, {})(NavBarContainer)
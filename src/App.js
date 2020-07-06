import React from 'react';
import './App.css';
import "./reset.css"
import {Route, withRouter} from 'react-router'
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Dialogs from "./Components/Dialogs/Dialogs";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/appReducer"
import Preloader from "./Components/common/Preloader/Preloader";
import NavBar from "./Components/NavBar/NavBar";

class App extends React.Component {
	componentDidMount() {
		this.props.initialize()
	}

	render() {
		if (!this.props.isInit) {
			return <Preloader/>
		}

		return (
			<div className="app-wrapper">
				<Header/>
				<NavBar/>
				<div className="content-wrapper">
					<Route path="/dialogs" render={() => <Dialogs/>}/>
					<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
					<Route path="/users" render={() => <UsersContainer/>}/>
					<Route path="/news" render={() => <News/>}/>
					<Route path="/music" render={() => <Music/>}/>
					<Route path="/settings" render={() => <Settings/>}/>
					<Route path="/login" render={() => <Login/>}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isInit: state.app.isInit
});

export default compose(
	connect(mapStateToProps, {initialize}),
	withRouter,
)
(App);
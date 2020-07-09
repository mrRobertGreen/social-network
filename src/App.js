import React from 'react';
import './App.css';
import "./reset.css"
import {Route, withRouter} from 'react-router'
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Dialogs from "./Components/Dialogs/Dialogs";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/appReducer"
import Preloader from "./Components/common/Preloader/Preloader";
import NavBar from "./Components/NavBar/NavBar";

const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"))

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
					<React.Suspense fallback={<div>Loading...</div>}>
						<Route path="/users" component={UsersContainer}/>
						<Route path="/dialogs" component={Dialogs}/>
						<Route path="/profile/:userId?" component={ProfileContainer}/>
						<Route path="/news" render={() => <News/>}/>
						<Route path="/music" render={() => <Music/>}/>
						<Route path="/settings" render={() => <Settings/>}/>
						<Route path="/login" render={() => <Login/>}/>
					</React.Suspense>
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
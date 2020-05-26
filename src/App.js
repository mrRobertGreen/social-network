import React from 'react';
import './App.css';
import "./reset.css"
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router'
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
	debugger
	return (
		<div className="app-wrapper">
			<Header/>
			<NavBar sections={props.state.navBar.sectionData}
			        friends={props.state.friendsData}/>
			<div className="content-wrapper">
				<Route path="/dialogs" render={() => <Dialogs
					state={props.state.dialogsPage}
					friends={props.state.friendsData}
					dispatcher={props.dispatcher}
				/>}/>
				<Route path="/profile" render={() => <Profile
					state={props.state.profilePage}
					dispatcher={props.dispatcher}
				/>}/>
				<Route path="/news" render={() => <News/>}/>
				<Route path="/music" render={() => <Music/>}/>
				<Route path="/settings" render={() => <Settings/>}/>
			</div>
		</div>
	)
};

export default App;
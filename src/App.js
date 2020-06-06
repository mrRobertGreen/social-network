import React from 'react';
import './App.css';
import "./reset.css"
import Header from "./Components/Header/Header";
import {Route} from 'react-router'
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
	return (
		<div className="app-wrapper">
			<HeaderContainer/>
			<NavBarContainer/>
			<div className="content-wrapper">
				<Route path="/dialogs" render={() => <DialogsContainer/>}/>
				<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
				<Route path="/users" render={() => <UsersContainer/>}/>
				<Route path="/news" render={() => <News/>}/>
				<Route path="/music" render={() => <Music/>}/>
				<Route path="/settings" render={() => <Settings/>}/>
			</div>
		</div>
	)
};

export default App;
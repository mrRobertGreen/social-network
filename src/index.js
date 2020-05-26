import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} dispatcher={store.dispatcher.bind(store)}/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// rerender - ето подписчек(наблюдатель(observer))
// rerender будет вызываться при определенных изменениях в state

serviceWorker.unregister();
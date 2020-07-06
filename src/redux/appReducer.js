import {getAuthUserAvatar, getAuthUserData} from "./authReducer";

const SET_INIT = "SET_INIT";

let initialState = {
	isInit: false,
	fake: 0
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INIT: {
			return {
				...state,
				isInit: action.isInit,
			};
		}
		case "FAKE": {
			return {
				...state,
				fake: state.fake++
			};
		}

		default:
			return state;
	}
};

export default appReducer;

const setInit = (isInit) => ({type: SET_INIT, isInit});

export const initialize = () => {
	return (dispatch) => {
		let promisesArr = [dispatch(getAuthUserData()), dispatch(getAuthUserAvatar())];
		Promise.all(promisesArr).then(() => dispatch(setInit(true)))
	}
};
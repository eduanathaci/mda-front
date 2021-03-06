import filters from "@sagas/filters";
import login from "@sagas/login";
import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";

export default function createReducer(injectedReducers, history) {
	return combineReducers({
		app: combineReducers({
			filters: combineReducers({
				index: filters,
			}),
			login: combineReducers({
				index: login,
			}),
		}),
		...injectedReducers,
		router: connectRouter(history),
	});
}

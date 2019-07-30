import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reposReducer(state = initialState, action) {
	switch (action.type) {
		case types.LOAD_REPOS: {
			return action.query;
		}
		case types.LOAD_REPOS_SUCCESS: {
			return action.repos;
		}
		default:
			return state;
	}
}

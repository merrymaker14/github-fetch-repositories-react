import axios from 'axios';
import * as types from './actionTypes';
import {takeEvery, put, call, select} from 'redux-saga/effects';

export function loadReposSuccess(repos) {
	return {
		type: types.LOAD_REPOS_SUCCESS,
		repos
	};
}

export function loadRepos(query) {
	return {
		type: types.LOAD_REPOS,
		query
	};
}

export function* watchLoadRepos() {
	yield takeEvery(types.LOAD_REPOS, fetchRepos);
}

function* fetchRepos() {
	const state = yield select();
	console.log(state);
	try {
		const data = yield call(() => {
			return axios
				.get(`https://api.github.com/search/repositories?q=${state.repos}`)
				.then(response => response.data.items)
				.catch(err => {
					throw err;
				});
		});
		yield put(loadReposSuccess(data));
	} catch (error) {
		console.log(error);
	};
}

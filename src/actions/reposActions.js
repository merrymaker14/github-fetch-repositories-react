import axios from 'axios';
import * as types from './actionTypes';

export function loadReposSuccess(repos) {
	return {
		type: types.LOAD_REPOS_SUCCESS,
		repos
	};
}

export function loadRepos(query = 'react') {
	return function(dispatch) {
		console.log(typeof(dispatch));
		return axios
		    .get(`https://api.github.com/search/repositories?q=${query}`)
			.then(response => {
				dispatch(loadReposSuccess(response.data.items));
			})
			.catch(err => {
				throw err;
			});
	};
}

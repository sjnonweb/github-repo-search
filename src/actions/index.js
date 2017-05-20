import axios from 'axios';

export const searchStart = (searchTerm) => ({
	type: 'SEARCH_START',
	payload: {
		searchActive: true,
		isFetching: true,
		searchTerm,
	}
})

export const searchComplete = (json, link) => ({
	type: 'SEARCH_COMPLETE',
	payload: {
		items: json.items,
		count: json.total_count,
		link
	}
})


export function fetchSearchResult(searchTerm) {
	return function(dispatch) {
		dispatch(searchStart(searchTerm));
		axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
			.then((response) => {
				dispatch(searchComplete(response.data, response.headers.link))
			})
	}
}

export const fetchRepoStart = () => (
	{
		type: 'FETCH_REPO_START',
		payload: {
			isFetchingRepo: true
		}
	}
)

export const fetchRepoComplete = (json) => ({
	type: 'FETCH_REPO_COMPLETE',
	payload: {
		item: json
	}
})

export function fetchRepo(url) {
	return function(dispatch) {
		axios.get(url)
			.then((response) => {
				dispatch(fetchRepoComplete(response.data));
			});
	}
}

export const sortSearchResult = (by) => ({
	type: 'SEARCH_SORT',
	payload: {
		by
	}
})

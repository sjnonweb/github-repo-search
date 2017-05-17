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
				console.log(response);
				dispatch(searchComplete(response.data, response.headers.link))
			})
	}
}

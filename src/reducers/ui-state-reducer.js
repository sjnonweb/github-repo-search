const intialState = {
	searchActive: false,
	isFetching: false,
	isFetchingRepo: false,
	searchTerm: '',
	networkError: false
}

export default function uiReducer(state=intialState, action) {
	switch(action.type) {
		case 'SEARCH_START': {
			return {
				...state,
				searchActive: action.payload.searchActive,
				isFetching: action.payload.isFetching,
				searchTerm: action.payload.searchTerm,
				networkError: false
			}
		}
		case 'SEARCH_COMPLETE': {
			return {
				...state,
				isFetching: false,
				networkError: false
			}
		}
		case 'FETCH_REPO_START': {
			return {
				...state,
				isFetchingRepo: action.payload.isFetchingRepo,
				networkError: false
			}
		}
		case 'FETCH_REPO_COMPLETE': {
			return {
				...state,
				isFetchingRepo: false,
				networkError: false
			}
		}
		case 'NETWORK_ERROR': {
			return {
				...state,
				networkError: true
			}
		}
		default: return state;
	}
}
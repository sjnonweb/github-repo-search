const intialState = {
	searchActive: false,
	isFetching: false,
	isFetchingRepo: false,
	searchTerm: 'boot'
}

export default function uiReducer(state=intialState, action) {
	switch(action.type) {
		case 'SEARCH_START': {
			return {
				...state,
				searchActive: action.payload.searchActive,
				isFetching: action.payload.isFetching,
				searchTerm: action.payload.searchTerm
			}
		}
		case 'SEARCH_COMPLETE': {
			return {
				...state,
				isFetching: false
			}
		}
		case 'FETCH_REPO_START': {
			return {
				...state,
				isFetchingRepo: action.payload.isFetchingRepo
			}
		}
		case 'FETCH_REPO_COMPLETE': {
			return {
				...state,
				isFetchingRepo: false,
			}
		}
		default: return state;
	}
}
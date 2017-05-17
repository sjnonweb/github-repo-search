const intialState = {
	searchActive: false,
	isFetching: false,
	searchTerm: ''
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
		default: return state;
	}
}
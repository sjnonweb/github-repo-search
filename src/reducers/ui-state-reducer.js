const intialState = {
	searchActive: false,
	searchTerm: ''
}

export default function uiReducer(state=intialState, action) {
	switch(action.type) {
		case 'SEARCH_START': {
			return {
				...state,
				searchActive: action.payload.searchActive,
				searchTerm: action.payload.searchTerm
			}
		}
		default: return state;
	}
}
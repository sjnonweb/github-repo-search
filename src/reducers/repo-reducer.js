const initialState = {
	total_count: null,
	items: [],
	link: ''
}
export default function repoReducer(state=initialState, action) {
	switch(action.type) {
		case 'SEARCH_COMPLETE': {
			return {
				...state,
				total_count: action.payload.count,
				items: action.payload.items,
				link: action.payload.link
			}
		}
		case 'SEARCH_SORT': {
			console.log(action);
			return state;
		}
		default: return state;
	}
}
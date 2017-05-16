const initialState = {
	total_count: 0,
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
		default: return state;
	}
}
const initialState = { 
	item: { }
};

export default function repoDetailsReducer(state=initialState, action) {
	switch(action.type) {
		case 'FETCH_REPO_COMPLETE': {
			return {
				...state,
				item: action.payload.item
			}
		}
		default: return state;
	}
}
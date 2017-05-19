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
			const auxItems = state.items.concat();
			switch(action.payload.by) {
				case 'best_match': {
					auxItems.sort((a,b)=>(b.score - a.score));
					return {
						...state,
						items: auxItems,
					}
				}
				case 'most_stars': {
					auxItems.sort((a,b)=>(b.stargazers_count - a.stargazers_count));
					return {
						...state,
						items: auxItems,
					}
				}
				case 'fewest_stars': {
					auxItems.sort((a,b)=>(a.stargazers_count - b.stargazers_count));
					return {
						...state,
						items: auxItems,
					}
				}
				case 'most_forks': {
					auxItems.sort((a,b)=>(b.forks_count - a.forks_count));
					return {
						...state,
						items: auxItems,
					}
				}
				case 'fewest_forks': {
					auxItems.sort((a,b)=>(a.forks_count - b.forks_count));
					return {
						...state,
						items: auxItems,
					}
				}
				case 'most_recent': {
					auxItems.sort((a,b) => {
						const aDateMilSec = new Date(a.updated_at).getTime();
						const bDateMilSec = new Date(b.updated_at).getTime();
						return (bDateMilSec - aDateMilSec);
					});
					return {
						...state,
						items: auxItems,
					}
				}
				case 'least_recent': {
					auxItems.sort((a,b) => {
						const aDateMilSec = new Date(a.updated_at).getTime();
						const bDateMilSec = new Date(b.updated_at).getTime();
						return (aDateMilSec - bDateMilSec);
					});
					return {
						...state,
						items: auxItems,
					}
				}
				default:
					return state;
			}
		}
		default: return state;
	}
}
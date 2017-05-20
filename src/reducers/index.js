import { combineReducers } from 'redux';
import repoReducer from './repo-reducer';
import uiReducer from './ui-state-reducer';
import repoDetailsReducer from './repo-details-reducer';

export default combineReducers({
	repoResultState: repoReducer,
	uiState: uiReducer,
	repoDetails: repoDetailsReducer
})


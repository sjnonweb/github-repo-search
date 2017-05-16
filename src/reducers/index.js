import { combineReducers } from 'redux';
import repoReducer from './repo-reducer';
import uiReducer from './ui-state-reducer';

export default combineReducers({
	repoState: repoReducer,
	uiState: uiReducer
})


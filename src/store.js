import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers/repo-reducer';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducer, middleware);

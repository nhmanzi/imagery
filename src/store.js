import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cookie from 'js-cookie';
import rootReducer from './reducer/rootReducer';
import rootSaga from './sagas';
import { getPost } from './reducer/PostReducer/index';
// const posts = cookie.getJSON('postLists') || [];
const posts = getPost() || [];
const initialState = { postList: { posts } };
console.log('waneeeeeeezaa', initialState);
const SagaMiddleware = createSagaMiddleware();
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composerEnhancer(applyMiddleware(SagaMiddleware))
);
SagaMiddleware.run(rootSaga);

export default store;

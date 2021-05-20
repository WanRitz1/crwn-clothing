import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
//import thunk from 'redux-thunk';
import {fetchCollectionsStart} from './shop/shop.sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
//const middlewares = [thunk];
const middlewares = [sagaMiddleware];
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchCollectionsStart);
export const persistor = persistStore(store);

export default {store,persistor};
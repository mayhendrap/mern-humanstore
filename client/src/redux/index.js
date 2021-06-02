import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['carts']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store)
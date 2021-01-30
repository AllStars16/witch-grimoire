import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default function configureStore(initialState) {
    const persistConfig = {
        key: 'root',
        storage,
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())));
    let persistor = persistStore(store)
    return { store, persistor }
}

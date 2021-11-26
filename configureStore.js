import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import surveyCombinedReducers from './reducers/index';

export default function configureStore() {
    if ((typeof compose !== 'undefined') && process.env.NODE_ENV !== 'production') {
        /* eslint-disable-next-line no-underscore-dangle */
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const store = createStore(surveyCombinedReducers, /* preloadedState, */ composeEnhancers(
            applyMiddleware(thunkMiddleware)
        ));

        return store;
    }

    return createStore(
        surveyCombinedReducers,
        applyMiddleware(thunkMiddleware)
    );
}
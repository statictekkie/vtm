import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

import adapter from 'redux-localstorage/lib/adapters/localStorage';
import persistState, { mergePersistedState } from 'redux-localstorage';
import { serialize, deserialize } from 'redux-localstorage-immutable';

export default function configureStore(initialState) {

    const reducer = compose(
        mergePersistedState(deserialize)
    )(rootReducer, initialState);

    const storage = compose(serialize)(adapter(window.localStorage));

    const createPersistentStore = compose(persistState(storage, 'state'))(createStore);

    const store = createPersistentStore(reducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

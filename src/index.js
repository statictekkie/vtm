// main.js
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { initialState } from './reducers';

require('./main.css');

injectTapEventPlugin();

const store = configureStore(initialState);

render(
    <Root store={store} />,
    document.getElementById('root')
);

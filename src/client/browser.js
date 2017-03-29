import React from 'react';
import { render } from 'react-dom';
import App from '../shared/App.js';

render(<App {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));

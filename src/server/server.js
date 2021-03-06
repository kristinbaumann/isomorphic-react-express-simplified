import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/App.js';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
    const initialState = { 
        name: 'EnterJS 2017' 
    };
    const appString = renderToString(<App {...initialState} />);
  
    res.send(template({
        appString,
        initialState: JSON.stringify(initialState)
    }));
});

server.listen(8080, () => {
  console.log('Listening on port 8080...');
});
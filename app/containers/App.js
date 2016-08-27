import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Map from './components/Map.js';
import './styles/index.scss';

render(
    <Map/>,
    document.getElementById('root')
);

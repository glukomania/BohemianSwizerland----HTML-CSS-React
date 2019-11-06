import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {hotels} from './mocks/offers';
import React from 'react';

const init = () => {
  ReactDOM.render(<App />, document.querySelector(`#root`));
};

init(hotels);


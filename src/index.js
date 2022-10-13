import React from 'react';
import { Provider } from "react-redux";
import { store } from "utils/redux/store/store";
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = { store } >
    <App />
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from "react-redux"
import { ThunkAction } from "redux-thunk"

import { Action, configureStore } from "@reduxjs/toolkit"


const store = configureStore({
  reducer: {

  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { legacy_createStore as createStore } from 'redux';
// import handleCategory from './reducers/handleCategoryReducer';

// const store = createStore(handleCategory);

import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// ...

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

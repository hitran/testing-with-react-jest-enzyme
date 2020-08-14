import React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import Router from './Router/Router'
import { BrowserRouter } from 'react-router-dom';
import store from './configureStore'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

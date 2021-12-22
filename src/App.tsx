import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Header from './components/Header';
import ProductFrontend from './pages/ProductFrontend';

function App() {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={ProductFrontend} />
    </BrowserRouter>
  );
}

export default App;

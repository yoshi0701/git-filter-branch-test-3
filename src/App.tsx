import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Header from './components/Header';
import ProductFrontend from './pages/ProductFrontend';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={ProductFrontend} />
      <Route path={'/login'} exact component={Login} />
      <Route path={'/register'} exact component={Register} />
    </BrowserRouter>
  );
}

export default App;

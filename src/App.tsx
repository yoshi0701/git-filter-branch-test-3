import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Header from './components/Header';
import ProductFrontend from './pages/ProductFrontend';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={ProductFrontend} />
      <Route path={'/login'} exact component={Login} />
      <Route path={'/register'} exact component={Register} />
      <Route path={'/profile'} exact component={Profile} />
    </BrowserRouter>
  );
}

export default App;

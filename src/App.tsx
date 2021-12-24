import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Header from './components/Header';
import ProductFrontend from './pages/ProductFrontend';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Stats from './pages/Stats';
import Rankings from './pages/Rankings';
import ProductBackend from './pages/ProductBackend';

function App() {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={ProductFrontend} />
      <Route path={'/backend'} exact component={ProductBackend} />
      <Route path={'/login'} exact component={Login} />
      <Route path={'/register'} exact component={Register} />
      <Route path={'/profile'} exact component={Profile} />
      <Route path={'/stats'} exact component={Stats} />
      <Route path={'/rankings'} exact component={Rankings} />
    </BrowserRouter>
  );
}

export default App;

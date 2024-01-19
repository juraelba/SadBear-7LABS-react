import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './pages/home/home'
import SadBear from './pages/sadBear/sadBear'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/sadBear" exact component={SadBear} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

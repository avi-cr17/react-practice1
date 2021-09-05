
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Paginator from './components/Paginator';
import {Route,Redirect,Switch} from 'react-router-dom';
import Dasboard from './components/Dasboard';
import NotFound from './components/NotFound';
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';


function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
      <Route path="/movieinfo/:id/:name" exact component={MovieInfo} />
      <Route  path="/dashboard" exact component={Dasboard} />
      <Route path="/movies" exact component={Paginator} />
      <Route path="/notfound" exact component={NotFound} />
      <Route path="/" exact component={Home} />
      <Redirect to="/notfound" />
      </Switch>
    </React.Fragment>
  );
}

export default App;

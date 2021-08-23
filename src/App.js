
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Paginator from './components/Paginator';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Paginator/>
    </React.Fragment>
  );
}

export default App;

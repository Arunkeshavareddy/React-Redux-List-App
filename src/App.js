import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './components/List';
import ListDetails from './components/ListDetails'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route exact path='/' component={List} />
      <Route path='/:listName' component={ListDetails} />
    </BrowserRouter>
  );
}

export default App;

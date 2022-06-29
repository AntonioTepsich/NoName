import React from 'react';
import './App.css';
import {Navbar} from './components';
import {ItemListContainer} from './container'


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;

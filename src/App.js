import React from 'react';
import './App.css';
import {Navbar} from './components';
import {ItemListContainer} from './components'


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={'E-Commerce Buzos'}></ItemListContainer>
    </div>
  );
}

export default App;

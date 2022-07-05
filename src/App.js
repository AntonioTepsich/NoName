import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components';
import {ItemListContainer, ItemDetailContainer} from './container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

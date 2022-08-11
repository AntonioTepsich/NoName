import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Navbar, Footer, NotFound} from './components';
import {ItemListContainer, ItemDetailContainer, Cart} from './container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopProvider from './context/ShopProvider';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;

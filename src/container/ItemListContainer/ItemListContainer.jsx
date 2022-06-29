import React, { useState } from 'react';
import './ItemListContainer.scss';

import ItemList from '../../components/ItemList/ItemList';
import { useEffect } from 'react';


const ItemListContainer = () => {

  const [products, setProducts]=useState(null)

  useEffect(()=>{
    const getProducts= async()=>{
      try{
        const response= await fetch('/mocks/data.json');
        const data = await response.json();
        setProducts(data);
      } catch(error) {
        console.log(error);
      }
    }
    getProducts();
  }, [])
  
  return (
    <div className='box'>
        {products ? <ItemList products={products} /> : null}
    </div>
  )
}

export default ItemListContainer
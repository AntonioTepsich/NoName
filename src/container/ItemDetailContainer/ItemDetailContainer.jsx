import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const params=useParams();

  useEffect(() => {
    const getItem = async()=>{
      try {
        const respuesta = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
        const data = await respuesta.json();
        setProductDetail(data)
      } catch (error) {
        console.log(error)
      }
    }
    getItem()
  }, [params])

  return (
    <div>
      <ItemDetail product={productDetail}/>
    </div>
  );
}

export default ItemDetailContainer
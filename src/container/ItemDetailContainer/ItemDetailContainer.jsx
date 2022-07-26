import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const params=useParams();

  useEffect(() => {
    const getItem = async()=>{
      try {
        const docRef = doc(db, "products", params.productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productDetail = {id: docSnap.id, ...docSnap.data()}
          setProductDetail(productDetail)
        } else {
          console.log("No such document!");
        }
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
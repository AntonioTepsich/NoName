import React from 'react';
import Item from '../Item/Item';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from "../Loading/Loading";
import './ItemList.scss';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemList = () => {

  const [products, setProducts]=useState([]);
  const params = useParams();


  useEffect( () => {
    const getProducts = async () => {
      try {
        //algoritmoGuardadoAutomatico() // >> Funcion para cargar productos programaticamente            
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
        productos.push({id: doc.id, ...doc.data()})
        });
        let productosFiltrados = [...productos];
        if (params?.categoryId) {
          productosFiltrados = productosFiltrados.filter((producto) => producto.category === params.categoryId)
        }          // >>>>> ".?" se llama opcional chaining, significa que si "params" viene undefined NO va a hacer lo que indica el IF
        setProducts(productosFiltrados)
      } catch(error) {
        console.log(error);
      }
    }
    getProducts();
  }, [params]);
  
  return (
    <Row>
      {products.length ? (
        products.map((prenda)=>{
          return(
            <Col key={prenda.id} sm={6} md={4} lg={3} className="mb-3">
              <Item name={prenda.title}
                      imagen={prenda.image}
                      precio={prenda.price}
                      id={prenda.id}/>
            </Col>
          )
        })
        ) : (
          <Loading />
      )}
    </Row>
    
  )
}

export default ItemList
import React from 'react';
import Item from '../Item/Item';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({}) => {

  const [products, setProducts]=useState([]);
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    const getProducts= async()=>{
      try{
        const response= await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        let productosFiltrados = [...data];
        if (params?.categoryId) {
          productosFiltrados = productosFiltrados.filter(producto => producto.category === params.categoryId)
        } 
        setProducts(productosFiltrados);
      } catch(error) {
        console.log(error);
      }
    }
    getProducts();
  }, [params]);
  
  return (
    <Row>
      {
        products.map((prenda)=>{
          return(
            <Col sm={6} md={4} lg={3} className="mb-3">
              <Item name={prenda.title}
                      imagen={prenda.image}
                      precio={prenda.price}
                      id={prenda.id}/>
            </Col>
          )
        })
      }
    </Row>
    
  )
}

export default ItemList
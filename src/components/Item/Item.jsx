import React from 'react';
import './Item.scss'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({name, imagen, precio, id }) => {
  const navigation=useNavigate();

  const handleAdd= () =>{
    console.log("Navega hacia el detail");
    navigation(`/detail/${id}`)
  }
  return (
      <Card onClick={handleAdd}>
            <img src={imagen} alt={name} className="card-img-top"/>
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>${precio}</Card.Text>
              <Button>Add to cart</Button>
          </Card.Body>  
      </Card>
  )
}

export default Item
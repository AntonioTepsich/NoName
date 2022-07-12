import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';


const ItemDetail = ({product}) => {

  const {addItem} = useContext(Shop);

  const navigate = useNavigate();

  const [qtyAdded, setQtyAdded] = useState(0);
  
  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };

  const handleTerminate = () => {
    addItem(product, qtyAdded)
    navigate('/cart')
  }
  
  return (
    <div>
      <Row>
        <Col md={6}>
          <img className='img-large' src={product.image} alt= '' />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.title}</h4>
            </ListGroup.Item>
            <ListGroup.Item>${product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Precio:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Estado:</Col>
                    <Col>
                      <Badge bg="success">En Stock</Badge>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-grid'>
                    {!qtyAdded ?
                      <ItemCount onConfirm={handleConfirm} stock={ 10 } /> 
                      :
                      <button onClick={handleTerminate} >Terminar Compra</button>
                    }
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ItemDetail
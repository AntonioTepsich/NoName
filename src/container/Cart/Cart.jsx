import React, { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cart = () => {

    const {cart, deletItem} = useContext(Shop);


  return (
    <>
    <h1>Orden de compra</h1>
      <Row>
        <Col md={8}>
          {cart.length === 0 ? (
            <div className='mensaje-carrito-vacio'>
                <h3>No hay productos en el carrito</h3>
                <Button><Link to='/'>Ir al inicio</Link></Button>
            </div>
          ) : (
            <ListGroup>
              {cart.map((producto) => (
                <ListGroup.Item key={producto.id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={producto.image}
                        alt={producto.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link to={`/product/${producto.id}`}>{producto.name}</Link>
                    </Col>
                    <Col md={3}>
                      <span> CANTIDAD: {producto.quantity}</span>{' '}
                    </Col>
                    <Col md={3}>SUBTOTAL: ${producto.quantity * producto.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => deletItem(producto.id)}>DELETE
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
            ))}
          </ListGroup>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Cart
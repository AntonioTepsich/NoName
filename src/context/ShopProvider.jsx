import React, { createContext, useState } from 'react';

export const Shop = createContext(); 

const ShopProvider = ({ children }) => {

	const [cart, setCart] = useState([]);

	const addItem = (producto, cantidad) => {

		const productoRepetido = isInCart(producto);
		if (productoRepetido) {
			productoRepetido.quantity += cantidad
			setCart([...cart])
		} else {
			setCart([...cart, {...producto, quantity: cantidad}])
		}

	}

	const deletItem = (id) => {
		const updatedCart = cart.filter(element => element.id !== id);
		setCart(updatedCart);
	}

	const clearCart = () => {
		setCart([]);
	}

	const isInCart = (producto) => {
		return cart.find(elemento => elemento.id === producto.id)
	}

	const totalCart = () => {
		let total = 0;
		cart.forEach(
			(producto) => (total = total + producto.quantity * producto.price)
		);
		return total
	}

	return(
		<Shop.Provider value={{ addItem, cart, deletItem, clearCart, totalCart}}>
			{children}
		</Shop.Provider>
	);
}

export default ShopProvider;
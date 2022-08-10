const generarOrden = (nombre, mail,tel, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            mail: mail,
            tel: tel,
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
} 

export default generarOrden;
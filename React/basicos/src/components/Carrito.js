import React from 'react';
import './carrito.css';
import Producto from './Producto';


const Carrito = ({carrito,agregarProducto}) => (
   
    <div className="carrito">
        <h2>Tu carrito de compras</h2>


        {carrito.length === 0
        ? <p>NO hay elementos</p>
        : carrito.map(prod => (
            <Producto 
                key={prod.id}
                producto = {prod}
                carrito = {carrito}
                agregarProducto = {agregarProducto}
            />
        ))}
    
    </div>
);

export default Carrito
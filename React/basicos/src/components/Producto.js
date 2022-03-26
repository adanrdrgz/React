import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {
    const {id,nombre,precio} = producto

    //Agg prod al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(prod => prod.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    const eliminarProducto = id => {
        const productos = carrito.filter(prod => prod.id !== id);
        
        agregarProducto(productos)
    }

    return ( 
        <div>            
            <h2>{nombre}</h2> 
            <p>${precio}</p>
            {productos
            ?
                (
                    <button
                        type="button"
                        onClick={ () => seleccionarProducto(id)}
                    >Comprar</button>
                )
            :
                (
                    <button
                        type="button"
                        onClick={ () => eliminarProducto(id)}
                    >Eliminar</button>
                )
            }
        </div>
    )
}

export default Producto;
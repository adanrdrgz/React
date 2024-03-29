import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//Crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto);

            //si todo sale bien, actualizar el state
            dispatch( agregarProductoExito(producto) )

            //Alerta

            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )

        } catch(error){
            //si hay error cambiar el state

            dispatch( agregarProductoError(true) );

            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intente de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//funcion que descarga los productos de la BD
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargarProductosExitosa(respuesta.data) );
        } catch (error) {
            dispatch( descargaProductosError() )
        }
    }
}

const descargarProductos  = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargarProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})
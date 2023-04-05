import React, {useState, useEffect} from 'react';
import '../App';
import './Cards';
import '../App.css';
import Cards from './Cards'
import products from '../data/product';
import {useParams} from 'react-router-dom';

// ------Mock Async Service (Asincronia)------
function getItems() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (products)
        }, 2500);
    });
    return promesa;
}

// ------------------------------
// ----Componente contenedor ---- 
function ItemListContainer() {
    const [products, setProducts] = useState ([]);
    // console.log("Renderizando....")

    console.log("Params", useParams())

    //la funcion useEffect() es para que el array se renderize una sola vez (sino se repite)
    useEffect(
        () => {
            // resolve
            getItems().then((respuesta) => {
                // console.log("promesa cumplida", respuesta)
                setProducts(respuesta)
            })
        }, []
    )  

    return (
    <>
        {/* <ItemList se reemplaza por Cards */}
        <Cards />
    </>
       
       
    )
}
export default ItemListContainer;
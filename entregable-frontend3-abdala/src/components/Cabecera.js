import React from 'react'
export default function Cabecera({purchaseItems}) {
  
  return (
    <header>
        {}
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos: <span>{purchaseItems}</span></p>
    </header>
  )
}

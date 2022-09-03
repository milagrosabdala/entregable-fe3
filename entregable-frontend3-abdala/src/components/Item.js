import { useState } from "react"

export default function Item({addItem, item}) {

  const [stock, setStock] = useState(item.stock)
  const onClickHandler = () => {
    addItem()
    setStock(stock-1)
  }

  return (
    <div className='producto'>
      {}
      <h3>{item.producto.nombre}</h3>
      <p>{item.producto.descripcion}</p>
      <h5>En stock: <span>{stock > 0 ? stock : 'agotado'}</span></h5>
      <button onClick={() => onClickHandler()} disabled = {stock<=0}>{stock > 0 ? 'COMPRAR' : 'SIN STOCK'}</button>
    </div>
  )
}

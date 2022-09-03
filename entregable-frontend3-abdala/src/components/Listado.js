import React from 'react'
import data from './data.json'
import Item from './Item'
export default function Listado({addItem}) {

  return (
    <div className='container'>
      {}
      {data.map((item)=>
        <Item addItem = {()=>addItem()} item = {item} key = {item.id}/>
      )}
    </div>
  )
}

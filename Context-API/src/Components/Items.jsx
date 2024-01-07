import React from 'react'
import { CartContext } from '../Contexts/CartContext'

function Items(props) {
    const cart = React.useContext(CartContext)
    // console.log(cart)
  return (
    <div className='item-card'>
        <h4>{props.name}</h4>
        <p>Price: ${props.price}</p>
        <button
        onClick={() => 
        cart.setItems([
            ...cart.items,{ name:props.name , price:props.price }
        ])
        }
        >Add To Cart</button>
    </div>
  )
}

export default Items
import React from 'react'
import { CartContext } from '../Contexts/CartContext'

function Cart() {
    const cart = React.useContext(CartContext)
    console.log(cart.items)
    const total = cart.items.reduce((a, b) => parseInt(a, 10) + parseInt(b.price, 10) , 0)
  return (
    <div className='cart'>
        <h1>Cart</h1>
        {
            cart && 
            cart.items.map((item) => (
                <li>
                    {item.name} - ${item.price}
                </li>
            ))
        }

        <h5>Total Bill: ${total}</h5>
    </div>
  )
}

export default Cart
import React from 'react'
import { CounterContext } from '../Contexts/CounterContext'

function Counter() {
    const counterState = React.useContext(CounterContext)
  return (
    <div>
        <button
        onClick={() => {
            counterState.setCount(counterState.count+1)
        }}
        >Increment</button>
        <button
        onClick={() => {
            counterState.setCount(counterState.count-1)
        }}
        >Decrement</button>
    </div>
    )
}

export default Counter
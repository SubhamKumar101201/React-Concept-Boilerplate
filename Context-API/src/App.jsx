import { useContext } from 'react'
import './App.css'
import Items from './Components/Items'
import Cart from './Components/Cart'

function App() {
  return (
        <div className="App">
          <Items name="MacBook Pro" price="100000"/>
          <Items name="Iphone 15 Max Pro" price="10000"/>
          <Items name="HP Victus" price="103000"/>
          <Items name="Apple Ultra 2s" price="1045000"/>
          <Cart/>
        </div>
  )
}

export default App



import './App.css'
import BurgerView from './features/burger/burgerView'
import PizzaView from './features/pizza/pizzaView'
import ProductView from './features/products/productView'


function App() {


  return (
    <main className='App'>
      <PizzaView/>
      <BurgerView/>
      <ProductView/>
    </main>
  )
}

export default App

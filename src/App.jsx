import React from 'react'
import Store from './redux/Store'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'

const App = () => {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Provider>
  )
}

export default App

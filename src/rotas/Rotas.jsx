import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import ProductViewPage from '../pages/ProductViewPage.jsx'
import ProductListingPage from '../pages/ProductListingPage.jsx'
import Layout from '../compoments/Layout.jsx'

const Rotas = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element = {<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='productlistingpage' element={<ProductListingPage/>}/>
        <Route path='productviewpage' element={<ProductViewPage/>}/>
      
     </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Rotas
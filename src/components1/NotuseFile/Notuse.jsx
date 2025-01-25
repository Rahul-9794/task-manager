import React from 'react'
import Navbar from './components1/navbar1/Navbar'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Shop from './components1/pages/Shop'
import ShopCatogry from './components1/pages/ShopCatogry'
import Products from './components1/pages/Products'
import Cart from './components1/pages/Cart'
import LoginSignUp from './components1/pages/LoginSignUp'
import Footer from './components1/Footer/Footer'
import men_banner from './components1/Assets/banner_mens.png'
import women_banner from './components1/Assets/banner_women.png'
import kids_banner from './components1/Assets/banner_kids.png'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatogry banner={men_banner} catrogry="mens"/>}/>
        <Route path='/womens' element={<ShopCatogry banner={women_banner} catrogry="womens" />}/>
        <Route path='/Kids' element={<ShopCatogry banner={kids_banner} catrogry="kids"/>}/>
        <Route path='/product' element={<Products/>}>
        <Route path=':productid' element={<Products/>}>
        </Route>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  )
}
export default App

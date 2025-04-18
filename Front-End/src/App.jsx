/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import {Login,Signup,Home, CreateProduct, MyProducts, Cart, ProductDetails, Profile, CreateAddress, SelectAddress, OrderConfirmation, MyOrdersPage} from "./Routes/routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/create-user' element={<Signup/>}/>
    <Route path='/create-product' element={<CreateProduct/>}/>  
    <Route path="/create-product/:id" element={<CreateProduct />} />
    <Route path="/my-products" element={<MyProducts/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/profile" element={<Profile />} />
    <Route path='/create-address' element={<CreateAddress />} />
    <Route path='/select-address' element={<SelectAddress/>}/>
    <Route path='/OrderConfirmation' element={<OrderConfirmation/>}/>
    <Route path='/Myorders' element={<MyOrdersPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
import Home from './pages/Home';
import ProductOverview from "./pages/ProductOverview";
import Cart from "./pages/Cart";

import Header from './components/Header'
import Footer from './components/Footer'

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';



function App() {
    const [items, setItems] = useState([]);

    function addToCart(item) {
        const existingItem = items.find(i => i.name === item.name);
        if (!existingItem) {
            setItems([...items, {...item}]);
        }
        console.log(items)
    }

    const handleRemoveItem = (e) => {
        const id = parseInt(e.target.getAttribute('id'));
        setItems(items.filter(item => item.id !== id));
    };


  return (
   <div>
       <Router>
           <Header itemCounter={items.length}/>
           <Routes>
               <Route exact path="/" element={<Home addToCart={addToCart}/>} />
               <Route path="/products" element={<ProductOverview addToCart={addToCart} />} />
               <Route path="/checkout" element={<Cart cartItems={items} handleRemoveItem={handleRemoveItem}/>} />
           </Routes>
           <Footer />
       </Router>
   </div>
  );
}

export default App;

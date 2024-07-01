import React, { useState } from 'react';
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

function Cart(props) {

    function calcSum(){
        let total = 0;
        props.cartItems.map(item => {
           total+=item.price
        });
        return total;
    }

        return (
            <main>
                <div className="container cartitems" style={{marginTop: '65px', minHeight: '80vh'}}>
                    <div className="row">
                        <div className="col-4">
                            <h1>Shopping Bag</h1>
                        </div>
                    </div>
                        {props.cartItems.length > 0 ? (
                                props.cartItems.map(item => (
                                    <CartItem key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} handleRemoveItem={props.handleRemoveItem}/>
                                ))
                            ) : (
                            <h3>The cart is empty</h3>
                            )}

                    <hr className="border border-3 border-dark bg-dark b opacity-75" />
                    {props.cartItems.length > 0 ? (<Checkout total={calcSum()}/>) : (<p></p>)}
                </div>
            </main>
        );
}
export default Cart
import React from 'react';

function AddToCartButton(props) {
    return (
        <button className="btn btn-primary" onClick={() => props.addToCart({id:props.id, name: props.name, price: props.price,img:props.img })}>
            Add to cart
        </button>
    );
}

export default AddToCartButton;
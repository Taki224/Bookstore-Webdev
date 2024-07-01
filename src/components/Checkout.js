import React, { useState } from 'react';

function Checkout(props) {
    return (
        <main>
            <div className="row float-end">
                <div className="col-6"><h3 className>Total</h3></div>
                <div className="col-6"><h3>€{props.total}</h3></div>
            </div>
            <br />
            <br />
            <div className="row float-end">
                <div className="col-12">
                    <p>Tax included</p>
                </div>
            </div>
            <br />
            <br />
            <div className="row float-end mb-5" style={{paddingBottom: '50px'}}>
                <div className="col-12">
                    <button className="btn btn-primary" style={{width: '160px'}}>Checkout</button>
                </div>
            </div>
            <br/>
            <br/>
        </main>
    );
}
export default Checkout
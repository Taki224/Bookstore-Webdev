import React, { useState } from 'react';

function CategoryCB(props) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" id2={props.id2} checked={props.check} onChange={props.change}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {props.name}
            </label>
        </div>
    );
}
export default CategoryCB;
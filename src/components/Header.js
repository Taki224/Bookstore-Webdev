import React from "react";
import {NavLink} from 'react-router-dom'

class Header extends React.Component{
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-custom">
                    <div className="container-fluid pt-1">
                        <a className="navbar-brand" href="/">BookStore</a>
                        <button className="navbar-toggler" style={{border: 'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link item" activeClassName="active" to="checkout">
                                        {this.props.itemCounter > 0 ? (
                                            <i className="fa badge fa-lg" value={this.props.itemCounter}><img src={require('../img/-shopping-cart_90604.png')} style={{width: '25px'}} /></i>
                                        ):(
                                            <img src={require('../img/-shopping-cart_90604.png')} style={{width: '25px'}} />
                                        )}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Header
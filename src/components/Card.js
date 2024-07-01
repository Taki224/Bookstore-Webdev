import React from "react";
import AddToCartButton from "./AddToCartButton";

class Card extends React.Component {
    render() {
        return (
            <div className="col-md-3 col-12">
                <div className="card" style={{width: '11rem'}}>

                    <img src={'productimages/'+this.props.image} style={{height: '270px'}}  className="card-img-top"
                         alt={"Book: "+this.props.name}/>
                    <div className="card-body">
                        <input type="hidden" value={this.props.id}/>
                        <h5>{this.props.name}</h5>
                        <p>{this.props.desc}</p>
                        <p>{'€'+this.props.price}</p>
                        <AddToCartButton addToCart={this.props.addToCart} id={this.props.id} name={this.props.name} price={this.props.price} img={this.props.image}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card
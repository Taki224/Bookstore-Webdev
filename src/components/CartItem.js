import React from "react";

class CartItem extends React.Component {
    render() {
        return(
            <div className="row bg-light mt-3 p-2 align-items-center">
                <div className="col-3"><img src={"productimages/"+this.props.img} alt="" style={{height: '100px'}} /></div>
                <div className="col-4"><h3>{this.props.name}</h3></div>
                <div className="col-3"></div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-12 pb-3" style={{textAlign: 'right', padding: 0}}><button onClick={this.props.handleRemoveItem} id={this.props.id}>remove</button></div>
                        <div className="col-12 pb-4" style={{textAlign: 'right', padding: 0}}><h3>€{this.props.price}</h3></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem
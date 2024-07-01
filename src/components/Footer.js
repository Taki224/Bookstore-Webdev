import React from "react";

class Footer extends React.Component{
    render() {
        return(
            <footer>
                <div className="container-fluid footer">
                    <div className="row pt-2">
                        <div className="col-md-2 col-6"><a href="#">Terms</a></div>
                        <div className="col-md-2 col-6"><a href="#" className="float-end">Privacy</a></div>
                        <div className="col-md-4" />
                        <div className="col-md-4 col-sm-12"><p className="float-md-end text-center">Copyright 2022 © BookStore</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center pb-3" style={{color: '#9a7d6f'}}>
                            <p>Photos from:</p>
                            <p>pixabay.com</p>
                            <p>unsplash.com</p>
                            <p>bookshop.org</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
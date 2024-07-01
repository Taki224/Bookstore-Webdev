import React from 'react'
import Card from "../components/Card";

class Home extends React.Component{

    state = {
        products: [],
    }
    componentDidMount() {
        fetch('products.json').then(response => response.json())
            .then(items => items.filter(item =>
                item.topSeller === true
            ))
            .then(data => this.setState(s => s.products = data));
    };

    render() {
        return (
            <main>
                <div className="header-image" id="up">
                    <div className="header-text">
                        <h1 className="mt-5">Welcome</h1>
                        <h3>BookStore</h3>
                        <a type="button" className="btn btn-secondary" href="products" id="welcomebutton">Our products</a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col" style={{textAlign: 'center'}}>
                            <h2 style={{marginTop: '20px', marginBottom: '15px'}}>Enjoy the great selections of our books!</h2>
                            <p style={{textAlign: 'center', fontStyle: 'italic'}}>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”
                                                                                  George R.R. Martin</p>
                        </div>
                    </div>
                    <div className="video">
                        <div className="row">
                            <div className="col-1" />
                            <div className="col">
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/_Z0bhGkbMzA" title="YouTube video" allowFullScreen />
                                </div>
                            </div>
                            <div className="col-1" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid topseller">
                    <div className="row">
                        <div className="col-4">
                            <h2>Topsellers</h2>
                        </div>
                    </div>
                    <div className="row cardrow text-center">
                        {
                            this.state.products.map(product => (
                                <Card addToCart={this.props.addToCart} key={product.id} id={product.id} name={product.name} image={product.imageName} desc={product.desc} price={product.price}/>
                            ))
                        }
                    </div>
                    <div className="row" style={{textAlign: 'center'}}>
                        <div className="col-12">
                            <a href="products">view all products</a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid about">
                    <div className="row" style={{marginTop: '15px'}}>
                        <div className="col-md-6 col-12 order-2 order-md-1">
                            <h2 style={{marginBottom: '20px'}}>About us</h2>
                            <p>Our team consists mainly of young members, but there are also those who have been living in the world of books for a long time. The different interests of the team members guarantee a wide selection of books.</p>
                            <br /><p> What can you contact us about?</p>
                            <ul>
                                <li>If you have any question about the ordering or shipping process.</li>
                                <li>If you are not sure what you are looking for.</li>
                                <li>If you have any question about any book.</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-12 p-0 p-md-4 order-1 order-md-2" style={{margin: 0}}>
                            <figure style={{textAlign: 'center'}}>
                                <img src={require('../img/team.jpeg')} className="aboutusimg" alt="Our team" title="Our team" style={{width: '100%'}} />
                                <figcaption>Our team</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="container-fluid specialoffer">
                    <div className="col-md-6 col-sm-8 pt-1 my-auto">
                        <h2>Special offer</h2>
                        <p style={{}}>
                            "Immerse yourself in Middle-earth with J.R.R. Tolkien's classic masterpieces behind the films, in this pocket-sized boxed set.
                        </p><br />
                        <p style={{}}>
                            This gorgeous four-volume, pocket-sized boxed set contains Tolkien's epic works The Hobbit and the three volumes of The Lord of the Rings (The Fellowship of the Ring, The Two Towers, and The Return of the King). The set comes shrink-wrapped with all four books in a leatherette-bound box with gold foil stamping; each book features a leatherette cover with stamped title and their compact size (4 1/4 x 5 7/8) makes them perfect to carry anywhere." <a href="https://bookshop.org/p/books/the-hobbit-and-the-lord-of-the-rings-deluxe-pocket-boxed-set-j-r-r-tolkien/7084382?ean=9780544445789" rel="noreferrer" target="_blank" style={{color: 'lightgray'}}>[Bookshop.org]</a>
                        </p>
                        <h3 style={{textAlign: 'right'}} className="pb-2">Now just €49.99</h3>
                    </div>
                    <div className="col-md-6 col-sm-4" />
                </div>
                <div className="container-fluid featured mt-5">
                    <div className="row text-center">
                        <div className="col-12">
                            <h2>Featured in</h2>
                        </div>
                    </div>
                    <div className="row mt-3  justify-content-center">
                        <div className="col-1" style={{minWidth: '60px'}} alt="Facebook Logo"><img className="center-block" src={require('../img/featured/logo1.png')} style={{width: '50px'}} /></div>
                        <div className="col-1" style={{minWidth: '60px'}} alt="Instagram Logo"><img className="center-block" src={require('../img/featured/logo2.png')} style={{width: '50px'}} /></div>
                        <div className="col-1" style={{minWidth: '60px'}} alt="Twitter Logo"><img className="center-block" src={require('../img/featured/logo3.png')} style={{width: '50px'}} /></div>
                    </div>
                </div>
                <div className="container-fluid faq">
                    <div className="row">
                        <div className="col-4">
                            <h2 className="pt-3">FAQ</h2>
                        </div>
                    </div>
                    <div className="accordion p-5 pt-3" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I contact you?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Please use our contact form.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Can I cancel or modify my order?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    If we haven't dispatched your package we can change it, please contact us.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How can I return a package?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Please see our return policy in out Terms and Conditions.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Is there international shipping?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes, but extra costs may apply to other countries.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mt-1 mb-1">
                        <div className="col">
                            <p className="float-end my-auto" id="back"><a href="#up">Back to top ↑</a></p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;
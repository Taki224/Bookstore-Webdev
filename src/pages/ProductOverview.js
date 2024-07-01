import React from 'react'
import Card from '../components/Card'
import CategoryCB from "../components/CategoryCB";

async function getData(url) {
    const response = await fetch(url).then(response => response.json());
    return response
}



class ProductOverview extends React.Component {
    state = {
        products: [],
        price: '',
        CheckedIds: [],
        Categories: [],
        selectedCategories: [],
        searchText: '',
        maxPrice: '',
    };
    componentDidMount() {
        getData("products.json").then(p =>{
            this.setState(s => s.products=p)
        }).then(() => {
            this.state.products.forEach(product =>{
                const existingItem = this.state.Categories.find(i => i === product.category);
                if (!existingItem) {
                    this.state.Categories.push(product.category)
                }
            })
        }).then(() => {
            this.state.Categories.forEach((c, i) => {
                this.state.CheckedIds.push(i)
            });
        }).then(() => {
            this.updateSelectedCategories()
        }).then(() => {
            let maxP = 0
            this.state.products.forEach(p => {
                if(p.price>maxP){
                    maxP = p.price
                }
            })
            this.setState({
                maxPrice: maxP,
                price: maxP+10,
            })
        });

    }

    sliderHandleChange = event => {
        this.setState({
            price: event.target.value,
        });
    };


    searchTextHandleChange = event => {
        this.setState({
            searchText: event.target.value,
        });
    };

    updateSelectedCategories() {
        this.setState(state => ({
            selectedCategories: state.CheckedIds.map(id => state.Categories[id])
        }), )
    }

    checkBoxHandleChange = e => {
        if(e.target.checked === true){
            const id = parseInt(e.target.getAttribute('id2'))
            this.setState(state => ({
                CheckedIds: state.CheckedIds.concat([id])
            }), () => this.updateSelectedCategories())
        }else{
            const id = parseInt(e.target.getAttribute('id2'));
            this.setState(state => ({
               CheckedIds:  state.CheckedIds.filter(item => item !== id)
            }), () => this.updateSelectedCategories())
        }

    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state ) {
            if(this.searchText === ''){
            fetch('products.json').then(response => response.json())
                .then(items => items.filter(item =>
                    item.price <= this.state.price &&
                    this.state.selectedCategories.includes(item.category)
                ))
                .then(data => this.setState(s => s.products = data));
        }else{
                fetch('products.json').then(response => response.json())
                    .then(items => items.filter(item =>
                        item.price <= this.state.price &&
                        this.state.selectedCategories.includes(item.category) &&
                        (item.name.toLowerCase().includes(this.state.searchText.toLowerCase()) || item.desc.toLowerCase().includes(this.state.searchText.toLowerCase()))
                    ))
                    .then(data => this.setState(s => s.products = data));
        }}

    }

    resetFilters = () =>{
        this.setState(state => ({
            CheckedIds: state.Categories.map((c, i) => i),
            price: state.maxPrice+10,
            searchText: '',

        }), () => this.updateSelectedCategories())
    }

    render() {
        return (
            <main>
                <div>
                    <div className="header-image">
                        <div className="header-text">
                            <h1>Our Prodcuts</h1>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 col-12 p-0">
                                <div className="well p-2" style={{border: 'solid', height: '100%', minHeight: '80vh'}}>
                                    <h4>Filter</h4>
                                    <h5>Category</h5>
                                    <div id="checkBoxGroup" className="p-3">
                                        {
                                            this.state.Categories.map((category, i) => {
                                                return <CategoryCB name={category} key={i} id2={i} change={this.checkBoxHandleChange} check={this.state.CheckedIds.includes(i) ? (true):(false)} />
                                            })
                                        }

                                    </div>
                                    <h5 className="p2">Price</h5>
                                    <div className="p-3" id="range">
                                        <input type="range" className="form-range" max={this.state.maxPrice+10} id="customRange1" value={this.state.price} onChange={this.sliderHandleChange}/>
                                        <label htmlFor="customRange1" className="form-label">0 €</label>
                                        <label htmlFor="customRange1" className="form-label float-end">{this.state.maxPrice+10} €</label>
                                    </div>
                                    <button className={'btn btn-primary'} style={{width: '100%'}} onClick={this.resetFilters}>Reset filters</button>
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="well float-end">
                                            <div className="input-group rounded">
                                                <input type="search" className="form-control rounded m-2" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={this.state.searchText} onChange={this.searchTextHandleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-center pt-2">
                                    {
                                        this.state.products.map(product => (
                                                <Card addToCart={this.props.addToCart} key={product.id} id={product.id} name={product.name} image={product.imageName} desc={product.desc} price={product.price}/>
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductOverview;
import React,  {Component} from 'react';
import * as ProductsJson from '../products.json';
import './Home.scss';
import Product from './Product/Product';


class Home extends Component {

    state = {
        products: [],
        categories:[],
        active:'All',
    }

    componentDidMount(){
        let createCategories = [];
        let createProducts = [];
        ProductsJson.products.forEach(function(item) {
            createCategories.push(item.product_category);
            createProducts.push(item);
        });
        this.setState({
            products: createProducts, 
            categories: createCategories});
    }

    categoryClickHandler(event) {
        let getId = event.target.id;
        let getFilteredResults = ProductsJson.products.filter((item)=>{
            return item.product_category === getId;
        });
        if (getId === 'All') {
            getFilteredResults = ProductsJson.products;
        }
        this.setState({products: getFilteredResults});
        if(this.state.active === getId) { 
            this.setState({active: ''});
        } else {
            this.setState({active: getId})
       }

    }

    categoryChangeHandler(event) {
        let getValue = event.target.value;
        let getFilteredResults = ProductsJson.products.filter((item)=>{
            return item.product_category === getValue;
        });
        if (getValue === 'All') {
            getFilteredResults = ProductsJson.products;
        }
        this.setState({products: getFilteredResults});

    }

    render() {
        return (
            <div className="home-wrapper">
                <div className="left-menu">

                <select onChange={this.categoryChangeHandler.bind(this)}>
                <option value="All">All</option>
                {this.state.categories.map(category=>{
                        return(
                            <option value={category} key={category}>{category}</option>
                        )
                    })}
                </select>

                <ul>
                    <li className={this.state.active === "All"? 'active': ''} id="All" onClick={this.categoryClickHandler.bind(this)}>All</li>
                    {this.state.categories.map(category=>{
                        return(
                            <li className={this.state.active === category? 'active': ''} onClick={this.categoryClickHandler.bind(this)} id={category} key={category}>{category}</li>
                        )
                    })}
                </ul>

                </div>
                <div className="products-wrapper">
                {this.state.products.map(product=>{
                        return(
                            <Product 
                            key={product.product_id}
                            image ={'/assets' + product.product_image}
                            alt={product.product_title}
                            title={product.product_title}
                            text={product.product_description}
                            link={product.product_link}
                             />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home;

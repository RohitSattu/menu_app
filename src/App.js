import React, {Component} from 'react';
import MenuPage from './components/MenuPage';
import {Route} from 'react-router-dom'
import CartPage from './components/CartPage'
class App extends Component {
  state = {
    products: [
      {
        "_id": "5d7277dc0366d9033d5bc664",
        "name": "Jelly Sandwich",
        "cost": 2,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7277f70366d9033d5bc665",
        "name": "Egg Sandwich",
        "cost": 2.65,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7278060366d9033d5bc666",
        "name": "Sausage Sandwich",
        "cost": 2.75,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7278100366d9033d5bc667",
        "name": "Bacon Sandwich",
        "cost": 2.75,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d72783f0366d9033d5bc668",
        "name": "Bologna Sandwich",
        "cost": 2.85,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d72785f0366d9033d5bc669",
        "name": "Ham Sandwich",
        "cost": 3.5,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7278750366d9033d5bc66a",
        "name": "Grilled Cheese Sandwich",
        "cost": 2.5,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7278860366d9033d5bc66b",
        "name": "Hillshire Sandwich",
        "cost": 3.5,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7278ad0366d9033d5bc66c",
        "name": "Sausage Link Sandwich",
        "cost": 3.25,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7278c20366d9033d5bc66d",
        "name": "Steak Sandwich",
        "cost": 3.75,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7278e20366d9033d5bc66e",
        "name": "Country Ham Sandwich",
        "cost": 3.75,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7278ef0366d9033d5bc66f",
        "name": "Hash Sandwich",
        "cost": 3.75,
        "menu": "Breakfast",
        "category": "Sandwich",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7279520366d9033d5bc670",
        "name": "Biscuit",
        "cost": 1.75,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7279690366d9033d5bc671",
        "name": "Sausage Biscuit",
        "cost": 2.5,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7279740366d9033d5bc672",
        "name": "Bacon Biscuit",
        "cost": 2.5,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d72799d0366d9033d5bc673",
        "name": "Bologna Biscuit",
        "cost": 2.6,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7279ae0366d9033d5bc674",
        "name": "Ham Biscuit",
        "cost": 3.5,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7279bc0366d9033d5bc675",
        "name": "Hillshire Biscuit",
        "cost": 3.5,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7279ce0366d9033d5bc676",
        "name": "Sausage Link Biscuit",
        "cost": 2.7,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d7279de0366d9033d5bc677",
        "name": "Steak Biscuit",
        "cost": 3.5,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d727a030366d9033d5bc678",
        "name": "Country Ham Biscuit",
        "cost": 2.9,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d727a110366d9033d5bc679",
        "name": "Hash Biscuit",
        "cost": 2.9,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      },
      {
        "_id": "5d727a250366d9033d5bc67a",
        "name": "Jelly Biscuit",
        "cost": 1.75,
        "menu": "Breakfast",
        "category": "Biscuit",
        "resto": "Newtons",
        "__v": 0
      }
    ],
    cart: []
  }
  // componentDidMount() {
  //   fetch('http://localhost:5001/products')
  //     .then((res) => res.json())
  //     .then((data) => this.setState({products: data}))
  // }
  onAddToCart = (product_id) => {
    this.setState((prevState, {cart}) => ({
        counter: prevState.cart.push(product_id)
    }))
  }
  emptyCart = () => {
    this.setState({
      cart: []
    })
  }
  render() {
    return (
        <>
        <Route exact path="/" render={() => (
          <MenuPage props={this.state} onAddToCart={this.onAddToCart}/>
        )}/>
        <Route path="/cart" render={() => (
          <CartPage 
          products={this.state.products}
          cart={this.state.cart}
          emptyCart={this.emptyCart}/>
        )}/>
        </>
    )
  }
}

export default App;

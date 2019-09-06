import React, {Component} from 'react';
import MenuPage from './components/MenuPage';
import {Route} from 'react-router-dom'
import CartPage from './components/CartPage'
class App extends Component {
  state = {
    products: [],
    cart: []
  }
  componentDidMount() {
    fetch('http://localhost:5001/products')
      .then((res) => res.json())
      .then((data) => this.setState({products: data}))
  }
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
          <CartPage props={this.state} emptyCart={this.emptyCart}/>
        )}/>
        </>
    )
  }
}

export default App;

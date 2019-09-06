import React, {Component} from 'react';
import MenuPage from './components/MenuPage';


class App extends Component {
  state = {
    products: [],
    cart: []
  }
  componentDidMount() {
    fetch('//localhost:5001/products')
      .then((res) => res.json())
      .then((data) => this.setState({products: data}))
  }
  onAddToCart = (product_id) => {
    this.setState((prevState, {cart}) => ({
        counter: prevState.cart.push(product_id)
    }))
}
  render() {
    return (
        <>
        
        <MenuPage props={this.state} onAddToCart={this.onAddToCart}/>
        </>
    )
  }
}

export default App;

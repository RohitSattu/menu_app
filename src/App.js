import React, {Component} from 'react';
import Menu from './components/Menu';


class App extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    fetch('//localhost:5001/products')
      .then((res) => res.json())
      .then((data) => this.setState({products: data}))
  }

  render() {
    return (
      <div style={{padding: '65px'}}>
        <h2 className="ui top attached header">Sandwich</h2>
        <div className="ui attached segment">
        <Menu products={this.state.products} category="sandwich"/>
        </div>
        <h2 className="ui top attached header">Biscuit</h2>
        <div className="ui attached segment">
        <Menu products={this.state.products} category="biscuit"/>
        </div>
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react';
import Menu from './components/Menu';
import {Header, Segment} from 'semantic-ui-react'

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
        <Header as='h2' attached='top'>Sandwich</Header>
        <Segment attached>
        <Menu products={this.state.products} category="sandwich"/>
        </Segment>
        <Header as='h2' attached='top'>Biscuit</Header>
        <Segment attached>
        <Menu products={this.state.products} category="biscuit"/>
        </Segment>
      </div>
    )
  }
}

export default App;

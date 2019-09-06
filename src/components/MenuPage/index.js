import React, {Component} from 'react'
import { Button, Table, Label, Input } from 'semantic-ui-react'

class MenuPage extends Component {
    state = {
        query: ''
    }

    updateQuery = (val) => {
        this.setState((prevState, {query}) => ({
            query: val.trim()
        }))
    }

    render() {

    const {products, cart} = this.props.props
    const onAddToCart = this.props.onAddToCart
    const {query} = this.state
    
    const filteredProducts = query === ''
        ? products
        : products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
        <Input fluid icon='search' iconPosition='left' placeholder='Search...' value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
        <Table stackable selectable  style={{width: '96%',margin: '2%'}}>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Cost</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>
                    <Button as='div' labelPosition='right'>
                    <Button color="red">Cart</Button>
                    <Label as='a' basic color='red' pointing='left'>
                        {cart.length}
                    </Label>
                    </Button>
                </Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
                {filteredProducts.map((product) => (
                <Table.Row key={product._id}>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>${parseFloat(product.cost).toFixed(2)}</Table.Cell>
                    <Table.Cell>{product.category}</Table.Cell>
                    <Table.Cell textAlign='right'><Button basic color="green" onClick={() => onAddToCart(product._id)}>Add</Button></Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table>
        </>
    )
                }
}

export default MenuPage
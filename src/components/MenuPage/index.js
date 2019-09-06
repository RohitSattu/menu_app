import React from 'react'
import { Button, Table, Label } from 'semantic-ui-react'

function MenuPage(props){
    const {products, cart} = props.props
    const onAddToCart = props.onAddToCart

    return (
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
                {products.map((product) => (
                <Table.Row key={product._id}>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>${parseFloat(product.cost).toFixed(2)}</Table.Cell>
                    <Table.Cell>{product.category}</Table.Cell>
                    <Table.Cell textAlign='right'><Button basic color="green" onClick={() => onAddToCart(product._id)}>Add</Button></Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}

export default MenuPage
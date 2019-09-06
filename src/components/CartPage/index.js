import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Table, Button} from 'semantic-ui-react'

class CartPage extends Component {
    render() {
        const {products, cart} = this.props.props
        const emptyCart = this.props.emptyCart
        let totalCost = 0

        if (cart.length < 1) {
            return <Redirect to='/' />
        } else {
        return (
            <Table color="green" style={{width: '96%',margin: '2%'}}>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={10}>Name</Table.HeaderCell>
                    <Table.HeaderCell width='six' textAlign='right'>Cost</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cart.map((product_id) => {
                        const matched = products.filter((product) => product._id === product_id)
                        totalCost = totalCost + matched[0].cost
                        return (
                            <Table.Row key={matched[0]._id}>
                                <Table.Cell>{matched[0].name}</Table.Cell>
                                <Table.Cell textAlign='right'>${parseFloat(matched[0].cost).toFixed(2)}</Table.Cell>
                            </Table.Row>
                        )
                    }) }
                </Table.Body>
                <Table.Footer>
                <Table.Row>
                    <Table.Cell>----------</Table.Cell>
                    <Table.Cell textAlign='right'>----------</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='right' positive><strong>Total</strong></Table.Cell>
                    <Table.Cell textAlign='right' positive><strong>${parseFloat(totalCost).toFixed(2)}</strong></Table.Cell>
                </Table.Row>
                <Table.Row >
                    <Table.Cell colSpan='4'>
                    <Button
                        floated='right'
                        primary
                        size='small'
                    >
                        Checkout
                    </Button>
                    <Link to="/" onClick={emptyCart}>
                    <Button size='small' color="red" floated="right" >Cancel</Button>
                    </Link>
                    </Table.Cell>
                </Table.Row>
                </Table.Footer>
            </Table>
        )}
    }
}

export default CartPage
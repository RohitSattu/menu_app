import React, {Component} from 'react'
import {Button, Card, Header, Segment} from 'semantic-ui-react'


class Menu extends Component {
    render() {
        const {products} = this.props
        return (
            <div style={{padding: '65px'}}>
            <Header as='h2' attached='top'>{this.props.category}</Header>
            <Segment attached>
            <Card.Group>
                {products.filter((p) => p.name.toLowerCase().includes(this.props.category)).map((prod) => (
                    <Card key={prod._id}>
                        <Card.Content><Card.Header>{prod.name}</Card.Header>
                        <Card.Meta>${prod.cost}</Card.Meta></Card.Content>
                        <Card.Content extra><Button basic color="green">Add</Button></Card.Content>
                    </Card>
                ))}
            </Card.Group>
            </Segment>
            </div>
        )
    }
}

export default Menu
import React, {Component} from 'react'

class Menu extends Component {
    render() {
        const {products} = this.props
        return (
            <div className="ui cards">
                {products.filter((p) => p.name.toLowerCase().includes(this.props.category)).map((prod) => (
                    <div className="ui card" key={prod._id}>
                        <div className="content"><div className="header">{prod.name}</div>
                        <div className="meta">${prod.cost}</div></div>
                        <div className="extra content"><button className="ui green basic button">Add</button></div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Menu
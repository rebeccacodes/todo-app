import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    async handleDelete() {
        await this.props.delete(this.props.id);
        this.props.getList();

    }

    render() {
        return (

            <li className="collection-item" >
                {(!this.props.complete) ? <Link to={`/item-details/${this.props.id}`}>{this.props.title}</Link> :
                    <Link to={`/item-details/${this.props.id}`}><strike>{this.props.title}</strike></Link>
                }
                <button className="btn orange darken-3 test" onClick={this.handleDelete.bind(this)}>DELETE</button>
            </li >

        );
    }
}


export default TodoItem;
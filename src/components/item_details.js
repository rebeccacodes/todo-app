import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import axios from 'axios';
import './item-details.css';

class ItemDetails extends Component {
    state = {
        itemDetails: {}
    }
    async componentDidMount() {
        //console.log('Item detail props: ', this.props.match.params);
        const { item_id } = this.props.match.params;
        const { BASE_URL, API_KEY } = config.api;
        const resp = await axios.get(`${BASE_URL}/todos/${item_id + API_KEY}`);

        this.setState({
            itemDetails: resp.data.todo
        });

    }

    async handleDelete() {
        await this.props.delete(this.state.itemDetails._id);
        this.props.history.push('/');
    }

    async handleToggleComplete() {
        const todoItem = await this.props.toggleComplete(this.state.itemDetails._id);
        console.log('item details toggle complete response: ', todoItem);
        this.setState({ itemDetails: todoItem });
    }

    render() {
        const { itemDetails } = this.state;
        const timestamp = parseInt(itemDetails.created)
        const date = new Date(timestamp);
        const finalDate = date.toLocaleDateString();

        return (
            <div>
                <h1 className="center">ITEM DETAILS</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to='/' className='btn purple darken-2'>Back to List</Link>
                    </div>
                </div>
                <div>
                    <div>
                        <h4><b>{itemDetails.title}</b></h4>
                    </div>
                    <div>
                        {!itemDetails.complete ?
                            <button className="btn pink lighten-1" onClick={this.handleToggleComplete.bind(this)} >COMPLETE TASK</button> :
                            <button className="btn pink darken-4" onClick={this.handleToggleComplete.bind(this)} >UNDO COMPLETE</button>}

                        <button className="btn purple darken-3 test" onClick={this.handleDelete.bind(this)}>DELETE</button>
                    </div></div>
                <h5 className="card-panel"><b>Details: </b>{itemDetails.details}</h5>

                <h5 className="card-panel"><b>Item Status: </b>
                    {itemDetails.complete
                        ? <span className="teal lighten-2">Item Complete</span>
                        : <span className="orange lighten-2">Item is not yet complete</span>
                    }
                </h5>
                <h5 className="card-panel"><b>Date Added: </b>{finalDate}</h5>

            </div>
        );
    }
}

export default ItemDetails;
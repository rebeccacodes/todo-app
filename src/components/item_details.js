import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import axios from 'axios';


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


    render() {
        const { itemDetails } = this.state;
        console.log('item details: ', itemDetails);
        return (
            <div>
                <h1 className="center">ITEM DETAILS</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to='/' className='btn purple darken-2'>Back to List</Link>
                    </div>
                </div>
                <h4><em>Title: </em> {itemDetails.title}</h4>
                <div className="row">
                    <div className="col s6 center">
                        <button className="btn blue darken-2" >TOGGLE COMPLETE</button>
                    </div>
                    <div className="col s6 center" >
                        <button className="btn red darken-2" onClick={this.handleDelete.bind(this)}>DELETE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetails;
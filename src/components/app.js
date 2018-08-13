import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import NotFound from './404';
import ItemDetails from './item_details';
import config from '../config';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    async addItem(item) {
        const { api: { BASE_URL, API_KEY } } = config;
        // const  { BASE_URL, API_KEY }  = config.api;
        try {
            if (!item.title) {
                throw new Error('Missing Title');
            }

            if (!item.details) {
                throw new Error('Missing Details');
            }
            await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
            this.getListData();

        } catch (err) {
            console.log('errrrrorrrrrr', err.message);
        }
    }

    // getListData() {
    //     axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
    //         this.setState({
    //             items: resp.data.todos
    //         });
    //     }).catch((err) => {
    //         console.log('error!?!?!', err.message);
    //     });
    // }

    async getListData() {
        const { api: { BASE_URL, API_KEY } } = config;
        const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);

        this.setState({
            items: resp.data.todos
        });
    }

    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact
                        path='/'
                        render={(props) => { return <Home add={this.addItem.bind(this)} getList={this.getListData.bind(this)} list={this.state.items} {...props} /> }} />
                    <Route path="/item-details/:item_id" component={ItemDetails} />
                    <Route component={NotFound} />

                </Switch>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleAddItem = (e) => {
        e.preventDefault();
        console.log('values:', this.state);

        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }

    render() {
        const { title, details } = this.state;

        return (
            <form onSubmit={this.handleAddItem}>
                <div className="row">
                    <div className="col s6">
                        <label>Title</label>
                        <input type="text" value={title} name='title' onChange={this.handleInputChange} />
                    </div>
                    <div className="col s6">
                        <label>Details</label>
                        <input type="text" value={details} name='details' onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="row"></div>
                <div className="col s12 right-align">
                    <button className="btn purple darken-2">Add Item</button>
                </div>
            </form>
        );
    }
}

export default AddItem;
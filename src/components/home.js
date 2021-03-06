import React, { Component } from 'react';
import TodoList from './todo_list'
import AddItem from './add_item';

class Home extends Component {

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const { add, list } = this.props;
        return (
            <div>
                <h1 className="center">TO DO LIST</h1>
                <AddItem add={add} />
                <TodoList list={list} />
            </div>
        );
    }
}

export default Home;


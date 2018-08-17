import React from 'react';
import { Link } from 'react-router-dom';



export default props => {
    console.log('todo item props:', props);
    return (

        <li className="collection-item">
            {(!props.complete) ? <Link to={`/item-details/${props.id}`}>{props.title}</Link> :
                <Link to={`/item-details/${props.id}`}><strike>{props.title}</strike></Link>
            }
            {/* <button className="btn purple darken-3 test" onClick={this.handleDelete.bind(this)}>DELETE</button> */}
        </li>

    );
}
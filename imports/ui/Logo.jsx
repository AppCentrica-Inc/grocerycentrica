import React, { Component } from 'react';


export default class GroceryLogo extends Component {
    render(){
        // <h1>© GroceryCentrica - ({this.props.incompleteCount})</h1>
     return (   <div>
            <h1>
                <img src='/logo.svg' />
            </h1>
    </div>);
    }

}
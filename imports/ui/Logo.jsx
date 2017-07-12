import React, { Component } from 'react';


export default class GroceryLogo extends Component {
    render(){
        // <h1>© GroceryCentrica - ({this.props.incompleteCount})</h1>
     return (   <div>
                    <img src='/logo.svg' />
                    <div className="fw2 f5 green-80 mt2 mb2"> Welcome to Grocery Centrica! Feel free to request weekly grocery! Just login in!</div>
                </div>
        );
    }

}
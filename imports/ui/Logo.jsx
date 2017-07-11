import React, { Component } from 'react';


export default class GroceryLogo extends Component {
    render(){
        // <h1>© GroceryCentrica - ({this.props.incompleteCount})</h1>
     return (   <div>
            <h1 className='fw1 i'>
                <img src='/logo.svg' />
            </h1>
    </div>);
    }

}
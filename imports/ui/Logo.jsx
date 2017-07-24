import React, { Component } from 'react';


export default class GroceryLogo extends Component {
    constructor(props){
        super(props);
    }
    render(){
     return (   <div>
                    <img src='/logo.svg' />
                     {this.props.connect ? 
                        <div className="fw3 f5 green-80 mt2 mb2">Welcome {this.props.userobj.name} request your grocery. </div>
                        :
                        <div className="fw3 f5 green-80 mt2 mb2"> Welcome to Grocery Centrica! Feel free to request weekly grocery! Just login in!</div>
                     }
                </div>
        );
    }

}


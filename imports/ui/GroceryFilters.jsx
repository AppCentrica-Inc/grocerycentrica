import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GroceryFilter extends Component {
    toggleHideCompleted(){
        this.setState({
           hideCompleted: !this.state.hideCompleted,
        });
    }
    
    render() {
            return (
            <label className="hide-completed">
             <input type="checkbox"
             readOnly
             checked={this.state.hideCompleted}
             onClick={this.toggleHideCompleted.bind(this)}
             />
              Remove sold out Grocery! 
          </label>);
    }
}
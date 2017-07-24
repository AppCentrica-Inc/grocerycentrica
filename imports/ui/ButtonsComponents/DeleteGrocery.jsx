import React, { Component } from 'react';


export default class DeleteGrocery extends Component {

  deleteGroceryClick(){
     this.props.handleDelete(this);
     return false;
  }  

 render() {
        return (
            <a className="f6 f5-l blButton dtc tc pv2 no-underline underline-hover dim fontColorButton" onClick={this.deleteGroceryClick.bind(this)} href="#" >Delete</a>
        )
 }
};
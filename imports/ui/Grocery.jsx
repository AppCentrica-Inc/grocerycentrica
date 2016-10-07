import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import {Grocerys} from '../api/grocerys.js';



// Grocery component - represents a single grocery item
export default class Grocery extends Component {
    
    toggleChecked(){
        Meteor.call('grocerys.setChecked',this.props.itemed._id,!this.props.itemed.checked);
    }
    
   deleteThisItem(){
     if(this.props.connect){
       Meteor.call('grocerys.remove',this.props.itemed._id,this.props.userobj.email);
     }
   }    
    
  render() {
    const taskClassName = this.props.itemed.checked ? 'checked' : '';
      
    return (        
      <li className={taskClassName}>
              <button className="delete" onClick={this.deleteThisItem.bind(this)}>
          &times;
        </button>
      
      <input type="checkbox"   onClick={this.toggleChecked.bind(this)}  />

      <span className='text'>
      {this.props.itemed.text}
      </span>
      </li>
    );
  }
}

 




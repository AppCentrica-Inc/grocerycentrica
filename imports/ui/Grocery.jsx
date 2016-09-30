import React, { Component, PropTypes } from 'react';

import {Grocerys} from '../api/grocerys.js';



// Grocery component - represents a single grocery item
export default class Grocery extends Component {
    
    toggleChecked(){
        //console.log("toggleChecked")
        Grocerys.update(this.props.itemed._id,{
           $set: {checked: !this.props.itemed.checked }, 
        });
    }
    
   deleteThisItem(){
     if(this.props.connect){
       //Grocerys.remove(this.props.itemed._id);
       Grocerys.update(this.props.itemed._id,{
         $set: {isDelete: true, 
                user: this.props.userobj.email  
            },
       });
     }
   }    
    
  render() {
      const taskClassName = this.props.itemed.checked ? 'checked' : '';
  //console.log(this.props.tasked);
      
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

 




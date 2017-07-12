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

   likeThisItem(){
     console.log("LIKED");
   }  
    
  render() {
    const taskClassName = this.props.itemed.checked ? 'checked' : '';
      // <li className={taskClassName}>
    return (        
      <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 w-100">
        <input className="w2-ns" type="checkbox"   onClick={this.toggleChecked.bind(this)}  />

        <div className="pl3 flex-auto f6 db">
          <span className='text'>{this.props.itemed.text}</span>      
         </div>
          
            {/*<button className="likeface" value="1" onClick={this.likeThisItem.bind(this)}>Like Grocery  
            </button>*/}
            <div>
            <button className="flex-right mr2" value="1" onClick={this.deleteThisItem.bind(this)}>Delete Grocery</button>
          </div>
      </li>
    );
  }
}

 




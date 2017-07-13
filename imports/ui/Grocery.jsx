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
      let isDelete = false;
      if(this.props.userobj){
         if(this.props.userobj.email == "henrique.cabral@appcentrica.com"){
           isDelete = true;
         }          
      }

    return (        
      <div className="ba bl-0 bt-0 br-0 b--dotted b--black-30 cf">
            <p className="pl3 fw2 f5 fl">
              <span className="">{this.props.itemed.text}</span>
            </p>
           
          {isDelete ? 
            <p className="pr3 fw2 f5 fr">
              <button className="dn db-ns" value="1" onClick={this.deleteThisItem.bind(this)}>Delete Grocery</button>
            </p>
            :
            null
          }  
            
          
       </div>
    );
  }
}

 




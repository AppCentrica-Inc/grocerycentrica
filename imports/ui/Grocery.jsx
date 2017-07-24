import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import BuyMoreComponent  from './ButtonsComponents/BuyMore';
import DeleteGrocery from './ButtonsComponents/DeleteGrocery';
import { BuyMore } from '../api/grocerys';

// Grocery component - represents a single grocery item
class Grocery extends Component {

   deleteThisItem(){
     if(this.props.connect){
       Meteor.call('grocerys.remove',this.props.itemed._id,this.props.userobj.email);
     }
   }  

   buymoreThisItem(){
       if(this.props.connect){
         Meteor.call('buymore.insert',this.props.itemed._id, this.props.userobj.email,this.props.iwantedMore.length);
       }else{
          console.log("Need to login");
       }     
   }
    
   
  render() {
    const taskClassName = this.props.itemed.checked ? 'checked' : '';
      let isDelete = false;
      if(this.props.userobj){
         if(this.props.userobj.email == "henrique.cabral@appcentrica.com" || this.props.userobj.email == this.props.itemed.user ){
           isDelete = true;
         }          
      }
      let IWantMoreTotal = this.props.iwantedMore.length;

    return (        
      <div className="bg-white center bt b--black-40 ">            
            <div className="pl3 fw2 db">
              <h1 className="f4 fw4 mt2">{this.props.itemed.text}</h1>
              {IWantMoreTotal ? 
                  <small className="gray db pv2">{this.props.BuyMoreList.length} Buy More</small>
                : 
                  null
              }
          </div>

           <div className="pa1">
             <div className="dt dt--fixed bt borderButtonsTop backgroundButtonsBuyMoreDelete ">
                   <BuyMoreComponent wantedMore={IWantMoreTotal} handleBuyMore={this.buymoreThisItem.bind(this)}/>
                  {isDelete ? 
                  <DeleteGrocery handleDelete={this.deleteThisItem.bind(this)}/>
                  : null
                  }
              </div>
          </div>   
          
       </div>
    );
  }
}

Grocery.propsTypes ={
  BuyMoreList: React.PropTypes.array,
  iwantedMore: React.PropTypes.array,
  ready: React.PropTypes.bool.isRequired
}

export default GroceryContainer = createContainer(( item ) => {
  return {
    ready: Meteor.subscribe('BuyMore'),
    BuyMoreList: BuyMore.find({groceryID : item.itemed._id}).fetch(),
    iwantedMore: BuyMore.find({$and: [{groceryID: item.itemed._id},{username: item.userobj.email },{activeWantedMore: 1}]}).fetch()
  };
}, Grocery);


 




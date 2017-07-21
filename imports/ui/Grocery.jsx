import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import BuyMoreComponent  from './ButtonsComponents/BuyMore';
import DeleteGrocery from './ButtonsComponents/DeleteGrocery';
import { BuyMore } from '../api/grocerys';

// Grocery component - represents a single grocery item
class Grocery extends Component {
   
    
   deleteThisItem(){
     console.log(this.props);
     if(this.props.connect){
       Meteor.call('grocerys.remove',this.props.itemed._id,this.props.userobj.email);
     }
   }  

   BuyMoreThisItem(){
     console.log(this.props);
     if(this.props.connect){
       Meteor.call('buymore.insert',props.itemed._id, this.props.userobj.email)
     }else{
        console.log("Need to login");
      }     
   }
    
  CountBuyMoreItem(ItemGroceryID){
    //var test = BuyMore.find({groceryID: ItemGroceryID}).fetch();
    //console.log("BUY MORE COUNT");
    //console.log(ItemGroceryID);
  }
    
  render() {
    const taskClassName = this.props.itemed.checked ? 'checked' : '';
      let isDelete = false;
      if(this.props.userobj){
         if(this.props.userobj.email == "henrique.cabral@appcentrica.com" || this.props.userobj.email == this.props.itemed.user ){
           isDelete = true;
         }          
      }
     console.log(this.props);
     this.CountBuyMoreItem(this.props);

    return (        
      <div className="bg-white center bt b--black-40 ">            
            <div className="pl3 fw2 db">
              <p className="f8">{this.props.itemed.text}</p>
          </div>

           <div className="pa1">
             <div className="dt dt--fixed bt borderButtonsTop backgrouncButtonsBuyMoreDelete ">
                   <BuyMoreComponent onClick={this.BuyMoreThisItem.bind(this)}/> 
                  {isDelete ? 
                  <DeleteGrocery onClick={this.deleteThisItem.bind(this)}/>
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
  ready: React.PropTypes.bool.isRequired
}

export default GroceryContainer = createContainer(( id ) => {
  console.log("CONTAINER");
  console.log(id)

  return {
    ready: Meteor.subscribe('BuyMore'),
    BuyMoreList: BuyMore.find().fetch(),
  };
}, Grocery);


 




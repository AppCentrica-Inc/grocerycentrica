import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Grocerys } from '../api/grocerys.js';    
import Grocery from './Grocery.jsx';
import LoginGoogle from './Login.jsx';
import GroceryLogo from './Logo.jsx';
import AddGroceryForm from './AddGrocery.jsx';

// App component - represents the whole app
class App extends Component {

    constructor(props){
        super(props);
        
        this.state = {
          hideCompleted: false,  
          connect : false,
          userobj: null,
          error: null            
        };
    }

  renderGrocerys() {
    var connect = this.state.connect;
    if(connect){
        let filteredGrocerys = this.props.items;
        if(this.state.hideCompleted){
            filteredGrocerys = filteredGrocerys.filter(item => !item.checked);
        }
        return filteredGrocerys.map((item) => 
                               <Grocery key={item._id} itemed={item} connect={this.state.connect} userobj={this.state.userobj}/>
                              );
    }
  }
                               
handleSubmit(grocery){
        event.preventDefault();
        var connect = this.state.connect;
          if (connect){          
                const text = grocery;
                Meteor.call('grocerys.insert', text, this.state.userobj.email);
                
          }
    }
 
handleUserLogin(connect, userObj) {
    this.setState({
      connect: connect,
      userobj: userObj
    });
}

  render() {
    return (
          <div className="mw5 mw7-ns center ph1-ns">
           <header className="sans-serif bg-black-60 pb2 pa3 br2">
              <GroceryLogo/>
          </header>
          <AddGroceryForm  handleSubmit={this.handleSubmit.bind(this)} connect={this.state.connect}/>      
          <LoginGoogle connect={this.state.connect}  userobj={this.state.userobj} handleUserLogin={this.handleUserLogin.bind(this)}/>
            <ul>
              {this.renderGrocerys()}
              </ul>
          </div>

    );
  }
}

App.propTypes ={
    items: PropTypes.array.isRequired,
    incompleteCount : PropTypes.number.isRequired,
    currentUser: PropTypes.object,
    login: PropTypes.object
}

export default createContainer(() => {
  return {
      items: Grocerys.find({isDelete:false},{sort: { createdAt: -1}}).fetch(),
      incompleteCount: Grocerys.find({checked: { $ne: true }, isDelete:false}).count(),
  };
}, App);


import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Grocerys } from '../api/grocerys.js';    
import Grocery from './Grocery.jsx';
import LoginGoogle from './Login.jsx';

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
      let filteredGrocerys = this.props.items;
      if(this.state.hideCompleted){
          filteredGrocerys = filteredGrocerys.filter(item => !item.checked);
      }
      
    return filteredGrocerys.map((item) => 
                               <Grocery key={item._id} itemed={item} connect={this.state.connect} userobj={this.state.userobj}/>
                              );
  }
                               
handleSubmit(event){
        event.preventDefault();
        var connect = this.state.connect;
          if (connect){          
                const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
                Meteor.call('grocerys.insert', text, this.state.userobj.email);
                ReactDOM.findDOMNode(this.refs.textInput).value = '';        
          }
    }
 
handleUserLogin(connect, userObj) {
    this.setState({
      connect: connect,
      userobj: userObj
    });
}
    

    toggleHideCompleted(){
        this.setState({
           hideCompleted: !this.state.hideCompleted,
        });
    }


  render() {
    return (
      
      <div className="container">
       <LoginGoogle connect={this.state.connect}  userobj={this.state.userobj} handleUserLogin={this.handleUserLogin.bind(this)}/>
        <header>
          <h1>GroceryCentrica - ({this.props.incompleteCount})</h1>

        <label className="hide-completed">
             <input type="checkbox"
             readOnly
             checked={this.state.hideCompleted}
             onClick={this.toggleHideCompleted.bind(this)}
             />
              Hide Completed Tasks
          </label>

           <form className='new-task' onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' ref='textInput' placeholder='Type to add new a grocery...'></input>
            </form>
        </header>      
 
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


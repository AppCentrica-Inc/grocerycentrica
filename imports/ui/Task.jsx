import React, { Component, PropTypes } from 'react';

import {Tasks} from '../api/tasks.js';



// Task component - represents a single todo item
export default class Task extends Component {
    
    toggleChecked(){
        //console.log("toggleChecked")
        Tasks.update(this.props.tasked._id,{
           $set: {checked: !this.props.tasked.checked }, 
        });
    }
    
   deleteThisTask(){
       Tasks.remove(this.props.tasked._id);
   }    
    
  render() {
      const taskClassName = this.props.tasked.checked ? 'checked' : '';
  //console.log(this.props.tasked);
      
    return (        
      <li className={taskClassName}>
              <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
      
      <input type="checkbox" readyOnly checked={this.props.checked}  onClick={this.toggleChecked.bind(this)}  />

      <span className='text'>
      {this.props.tasked.text}
      </span>
      </li>
    );
  }
}

 

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};


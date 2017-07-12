import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AddGroceryForm extends Component {

    handleSubmit(event){
        event.preventDefault();
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
        ReactDOM.findDOMNode(this.refs.textInput).value = '';        
        this.props.handleSubmit(text);        
    }


    render() {
        const addgrocery = "";

        if(this.props.connect){
            return (
                <div> 
                <form className='new-task' onSubmit={this.handleSubmit.bind(this)} >
                    <input type='text' ref='textInput' placeholder='Type to add new a grocery...'></input>
                </form>
                </div>  );
        }else{
            return (null);            
        }
    }
}
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
                <form className='bg-black-60 mw7 pa3 br2-ns ba b--black-10 ma0' onSubmit={this.handleSubmit.bind(this)} >
                    <fieldset className="cf bn pa0">
                        <div className="cf">
                            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" type='text' ref='textInput' name='grocery' placeholder='Type to add a grocery...'></input>
                            <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bgbutton-green white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Add Grocery"></input>
                        </div>
                    </fieldset>
                </form>
                </div>  );
        }else{
            return (null);            
        }
    }
}
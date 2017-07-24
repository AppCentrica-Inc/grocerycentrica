import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class BuyMore extends Component {

buyMoreGroceryClick(){
        this.props.handleBuyMore(this);
        return false;
}

 render() {
        let classButton = "f6 f5-l dtc tc pv2 no-underline dim fontColorButton";
        if(this.props.wantedMore){
            classButton += " backgroundIwantedMore";
        }

        return (
            <a className={classButton} href="#" onClick={this.buyMoreGroceryClick.bind(this)}>Buy More</a>
        )
 }
};
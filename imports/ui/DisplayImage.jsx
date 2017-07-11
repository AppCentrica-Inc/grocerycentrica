import React, { Component } from 'react';


export default class DisplayAnImage extends Component {
  render() {
      return (
      <div>
        <img className='br-100 h3 w3 dib' src={this.props.profilePhoto} alt={this.props.profileName} />
        <span className="f6 db black-70"> 
            {this.props.profileName}
        </span>
      </div>
      
      );
  }
}
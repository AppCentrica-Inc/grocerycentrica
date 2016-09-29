import React, { Component } from 'react';


export default class DisplayAnImage extends Component {
  render() {
      return (<div> 
            <img className='photoLayout' src={this.props.profilePhoto} /><span>{this.props.profileName}</span>
      </div>);
  }
}
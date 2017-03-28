import React, { Component } from 'react';


export default class DisplayAnImage extends Component {
  render() {
      return (<div className='loginbox'> 
        {this.props.profileName}
            <img className='photoLayout' src={this.props.profilePhoto} />
      </div>);
  }
}
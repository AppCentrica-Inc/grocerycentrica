import GoogleLogin from 'react-google-login';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DisplayAnImage from './DisplayImage.jsx'


export default class LoginGoogle extends Component {

responseGoogleOnSuccess(response){
    this.props.handleUserLogin(true,response.profileObj);
}

responseGoogleOnFailure(failure){
    console.log(failure);
}
    

loginMenu() {
    return  (<GoogleLogin
        clientId="466670531300-vhks4a5l6bda3u3847gj4qs33qgsupfb.apps.googleusercontent.com"
        buttonText="Log In"
        onSuccess={this.responseGoogleOnSuccess.bind(this)}
        onFailure={this.responseGoogleOnFailure}
        className="no-underline fw6 f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2"
      />    );
}

loginSignin(){
    profilePhoto = this.props.userobj.imageUrl;
    profileName = this.props.userobj.name;
    return (<DisplayAnImage profilePhoto={profilePhoto} profileName={profileName} />);
}


render() {
    var login;
    login = this.props.connect ? null : this.loginMenu()
     return (login);
    }   
}

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
        buttonText="Login"
        onSuccess={this.responseGoogleOnSuccess.bind(this)}
        onFailure={this.responseGoogleOnFailure}
        className="loginButton"
      />    );
}

loginSignin(){
    //        Object { googleId: "110066734457150173332", imageUrl: "https://lh3.googleusercontent.com/-…", email: "henriqueadonai@gmail.com", name: "Henrique Cabral", givenName: "Henrique", familyName: "Cabral" }
    console.log('signin');
    console.log(this.props.userobj);
    profilePhoto = this.props.userobj.imageUrl;
    profileName = this.props.userobj.name;
    return (<DisplayAnImage profilePhoto={profilePhoto} profileName={profileName} />);
}


render() {
    var login;
    if (this.props.connect) {
      login = this.loginSignin();
    } else {
      login = this.loginMenu();
    }

     return (login);
    }   
}

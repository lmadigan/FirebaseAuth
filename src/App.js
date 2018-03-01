import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyB8yAxx0c4x1Kta2xuDQMNmdMwbfyWNa2I",
      authDomain: "auth-f08e7.firebaseapp.com",
      databaseURL: "https://auth-f08e7.firebaseio.com",
      projectId: "auth-f08e7",
      storageBucket: "auth-f08e7.appspot.com",
      messagingSenderId: "1072149456694"
    })
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm/>
      </View>
    );
  }
}

export default App;

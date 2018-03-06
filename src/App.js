import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyB8yAxx0c4x1Kta2xuDQMNmdMwbfyWNa2I",
      authDomain: "auth-f08e7.firebaseapp.com",
      databaseURL: "https://auth-f08e7.firebaseio.com",
      projectId: "auth-f08e7",
      storageBucket: "auth-f08e7.appspot.com",
      messagingSenderId: "1072149456694"
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);

      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button> Log Out </Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

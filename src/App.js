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
        return <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
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

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};



export default App;

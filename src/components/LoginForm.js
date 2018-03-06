import React, { Component }  from 'react';
import { View, TextInput, Text} from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress(){
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch( error => {
            this.onLoginFail(error)
          });
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail(error) {
    this.setState({ error: error.message, loading: false });
  }

  renderButton(){
    if (this.state.loading) {
      return <Spinner size="small"/>
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render(){
    return (
      <Card>
        <CardSection>
          <Input
              secureTextEntry={false}
              placeholder='user@gmail.com'
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              />
        </CardSection>

        <CardSection>
          <Input
              secureTextEntry={true}
              placeholder='password'
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

// This is a callback function that will be called at some point in the future so you nees
//  to bind it to this
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;

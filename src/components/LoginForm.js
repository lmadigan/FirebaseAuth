import React, { Component }  from 'react';
import { View, TextInput} from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

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

        <CardSection>
          <Button onPress={this.buttonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

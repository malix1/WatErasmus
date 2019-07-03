import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    onEmailChange = email => {
        this.setState({ email });
    }

    onPasswordChange = password => {
        this.setState({ password });
    }

    onLogin = () => {
        const { email, password } = this.state;
    }

    onSignin = () => {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder='Email'
                    onChange={this.onEmailChange}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Password'
                    onChange={this.onPasswordChange}
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Button
                    onPress={this.onLogin}
                    title="Log In"
                    type="outline"
                />
                <Button
                    onPress={this.onSignin}
                    title="Sign In"
                    type="outline"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

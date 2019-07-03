import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SigninPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConf: ""
        };
    }
    onEmailChange = email => {
        this.setState({ email });
    }

    onPasswordChange = password => {
        this.setState({ password });
    }

    onPasswordConfChange = passwordConf => {
        this.setState({ passwordConf });
    }

    createUser = () => {

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
                <Input
                    placeholder='Password Confirmation'
                    onChange={this.onPasswordConfChange}
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Button
                    onPress={this.createUser}
                    title="Create User"
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

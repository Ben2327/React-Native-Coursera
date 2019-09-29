import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Password: '',
        }
    }
    user = () => {
        alert("Processing Please Wait!!");
    }

    static navigationOptions = {
        title: 'Signup',
        
        
        
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('./components/asserts/church.png')} />
                        <TextInput style={styles.inputs}
                            placeholder="Registration Page"
                            placeholderTextColor='black'
                            editable={false}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('./components/asserts/members.png')} />
                        <TextInput style={styles.inputs}
                            placeholder="Name"
                            onChangeText={(Name) => this.setState({ Name })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('./components/asserts/password.png')} />
                        <TextInput style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(Password) => this.setState({ Password })} />
                    </View>

                    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigate('home', {JSON_ListView_Clicked_Item: this.state.Name})}>
                    <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.user}>
                        <Text>Forgot your password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.user}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        borderBottomWidth: 30,
        borderTopWidth: 30,
        borderBottomColor: '#800000',
        borderTopColor: '#800000',
        padding: 20
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,

    },
    loginButton: {
        backgroundColor: "#800000",
    },
    loginText: {
        color: 'white',
        fontStyle: 'italic'
    }
});
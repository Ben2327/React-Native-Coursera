import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import signup from './signup';
import home from './home';
import { createStackNavigator } from 'react-navigation';

const SignupNavigator = createStackNavigator({
    signup: { screen: signup },
    home: { screen: home }
}, {
        initialRouteName: 'signup',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#800000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    });

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : 0 }}>
                <SignupNavigator />
            </View>
        );
    }
}
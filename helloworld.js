import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class first extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ Color: 'red' }}>
                    Welcome to React-Native Hello World!!!
                </Text>
                <Image source={require('./asserts/Desert.jpg')}>
                    </Image>
            </View>
        );
    }
}
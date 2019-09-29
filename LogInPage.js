import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderColor: 'blue', borderWidth: 5, backgroundColor: 'green',flexDirection:'row' }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>HIIIIIIIIII!!!!!!!!</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderColor: 'red', borderWidth: 5, backgroundColor: 'yellow' }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Heloooo There!!!!!</Text>
                </View>
            </View>
        );
    }
}
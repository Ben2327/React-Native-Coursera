import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class Division extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:4, backgroundColor:'red'}}>
                    <Text>
                        Text 4
                    </Text>
                </View>
                <View style={{flex:3, backgroundColor:'green'}}>
                    <Text>
                        Text 3
                    </Text>
                </View>
                <View style={{flex:2, backgroundColor:'yellow'}}>
                    <Text>
                        Text 2
                    </Text>
                </View>
                <View style={{flex:1, backgroundColor:'white'}}>
                    <Text>
                        Text 1
                    </Text>
                </View>
            </View>
        );
    }
} 
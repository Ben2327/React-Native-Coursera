import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default class ContactUs extends Component {
    static navigationOptions = {
        title: 'Contact Us',
    };
    render() {
        return (
            <View>
                <Card
                    title='Contact Information'>
                    <Text style={{ margin: 10, fontWeight: 'bold' }}>
                        121, Clear Water Bay Road
                    </Text>
                    <Text style={{ margin: 10, fontWeight: 'bold' }}>
                        Clear Water Bay, Kowloon
                    </Text>
                    <Text style={{ margin: 10, fontWeight: 'bold' }}>
                        HONG KONG
                    </Text>
                    <Text style={{ margin: 10, fontWeight: 'bold' }}>
                        Tel: +852 1234 5678
                    </Text>
                    <Text style={{ margin: 10, fontWeight: 'bold' }}>
                        Fax: +852 8765 4321
                    </Text>
                    <Text style={{ margin: 10, fontWeight: 'bold' }}>
                        Email:confusion@food.net
                    </Text>
                </Card>

            </View>
        );
    }
}
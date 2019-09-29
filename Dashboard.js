import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Linking } from 'react-native';
//import { Header, Footer, Icon, Fab, Button, Left, Title, Right } from 'native-base';
export default class Main extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         active: 'true'
    //     };
    // }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('./components/asserts/mem.png')}
                                style={styles.container} />
                            <Text style={{
                                textAlign: 'center', fontSize: 15,
                                fontWeight: 'bold'
                            }}>Members</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity >
                            <Image source={require('./components/asserts/minis.png')}
                                style={styles.container} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Ministries</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity >
                            <Image source={require('./components/asserts/abou.png')}
                                style={styles.container} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>About Us</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity >
                            <Image source={require('./components/asserts/res.png')}
                                style={styles.container} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Resources</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('./components/asserts/ourser.png')}
                                style={styles.container} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Our Services</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('./components/asserts/reach.png')}
                                style={styles.container} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Reach Us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 110,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
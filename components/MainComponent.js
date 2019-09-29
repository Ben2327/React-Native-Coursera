import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
}, {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    });

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    });

const ContactUsNavigator = createStackNavigator({
    ContactUs: { screen: ContactUs },
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    });

const AboutUsNavigator = createStackNavigator({
    AboutUs: { screen: AboutUs },
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    });

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    },
    ContactUs: {
        screen: ContactUsNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us'
        }
    },
    ABoutUs: {
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us'
        }
    }


}, {
        drawerBackgroundColor: '#D1C4E9'

    })

export default class Main extends Component {
    // constructor(props){
    //     super(props);            //wont be requiring these items here kyunki MenuComponent mai call krr liya hai inko
    //     this.state = {
    //         dishes: DISHES,
    //         selectedDish: null
    //     }
    // }
    // onDishSelect(dishId) {
    //     this.setState({selectedDish: dishId});
    // }
    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : 0 }}>
                <MainNavigator />
                {/* <Menu dishes = {this.state.dishes}
                onPress={(dishId) => this.onDishSelect(dishId)}
                />
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> Well this was used to get the content of the pressed data into a card and show it while learned in coursera...*/}
            </View>
        );
    }
}
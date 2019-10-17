import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
  })

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    },
    Dishdetail: { screen: Dishdetail }
}, {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512D'
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
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512D'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />

        })
    });

const ContactUsNavigator = createStackNavigator({
    ContactUs: { screen: ContactUs },
}, {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512D'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />

        })
    });

const AboutUsNavigator = createStackNavigator({
    AboutUs: { screen: AboutUs },
}, {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512D'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />

        })
    });

const CustomDrawerContentComponent = (props) => (
    <ScrollView style={{ flex: 1 }}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={require('./images/logo.png')}
                    style={styles.drawerImage} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>
                    Restaurant lalalala
                    </Text>
            </View>
        </View>
        <DrawerItems {...props} />
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    ContactUs: {
        screen: ContactUsNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='address-card'
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    AboutUs: {
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    }


}, {
        drawerBackgroundColor: '#e0e0e0',
        contentComponent: CustomDrawerContentComponent

    });

class Main extends Component {
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
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
      }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MainNavigator />
                {/* <Menu dishes = {this.state.dishes}
                onPress={(dishId) => this.onDishSelect(dishId)}
                />
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> Well this was used to get the content of the pressed data into a card and show it while learned in coursera...*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#512D',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'

    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
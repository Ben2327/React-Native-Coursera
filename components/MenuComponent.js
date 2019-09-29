import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

// {was used for that pressing and getting card vala thing but have to make it to class kyunki state banane hai menu mai isliye }function Menu(props){
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    };

    static navigationOptions = {
        title: 'Menu',
    };

    render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('Dishdetail', {dishId: item.id})}
                    leftAvatar={{ source: require('./images/uthappizza.png') }}
                />
            )
        }

        const { navigate } = this.props.navigation;
        return (
            <View style={{ marginTop: 30 }}>
                <FlatList
                    data={this.state.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View >
        );
    }
}

export default Menu;
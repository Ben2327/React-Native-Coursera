import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
  }

// {was used for that pressing and getting card vala thing but have to make it to class kyunki state banane hai menu mai isliye }function Menu(props){
class Menu extends Component {

    

    static navigationOptions = {
        title: 'Menu',
    };

    render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}
                    imageSrc={{ uri: baseUrl + item.image}}
                    />
            )
        }

        const { navigate } = this.props.navigation;
        return (
            <View style={{ marginTop: 30 }}>
               <FlatList 
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
            </View >
        );
    }
}

export default connect(mapStateToProps)(Menu);
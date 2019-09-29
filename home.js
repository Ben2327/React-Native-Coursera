import React,{Component} from 'react';
import {View, Text, ListView} from 'react-native';


export default class home extends Component {

    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {  
            backgroundColor: '#800000',  
        },  
        headerTintColor: 'black',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
        
    };

    render(){
        return(
            <View>
                <Text>Helooo Welcome to our homepage......
                
                </Text>
                <Text>Your Name is:-
                {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
                </Text>
            </View>
        );
    }
}
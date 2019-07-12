import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class Movie extends Component{
    static navigationOptions = {
        title: '电影',
        tabBarIcon:({focused, tintColor}) => (
            <Image source={focused ? require('../img/movie1.jpg') : require('../img/movie.jpg')} style={{width:30,height:30}} />
        )
    };
    render(){
        return (
            <View>
                <Text>电影</Text>
                <Text onPress={() => {this.props.navigation.navigate('Counter')}}>去到计数器页面</Text>
            </View>
        )
    }
}
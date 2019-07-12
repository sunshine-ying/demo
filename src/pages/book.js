import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
export default class Book extends Component{

    static navigationOptions = {
        title: '图书',
        tabBarIcon:({focused, tintColor}) => (
            <Image source={focused ? require('../img/book1.jpg') : require('../img/book.jpg')} style={{width:30,height:30}} />
        )
    };
    render(){
        return (
            <View>
                <Text>图书</Text>
                <Text onPress={() => {this.props.navigation.navigate('TodoList')}}>去到TODOList页面</Text>
            </View>
        )
    }
}
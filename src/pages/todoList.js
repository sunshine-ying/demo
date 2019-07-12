import React , {Component} from "react";
import {View, Text} from "react-native";

export default class TodoList extends Component{

    render(){
        const {navigation} = this.props
        const data = navigation.getParam('data')
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>TodoList</Text>
                <Text>{data}</Text>
            </View>
        )
    }
}
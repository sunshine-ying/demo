import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from "react-redux"
// 路由
import { createStackNavigator, createAppContainer } from "react-navigation"

class App extends Component{
    static navigationOptions = {
        title: '计数器',
        headerMode:'none'
    };
    constructor(){
        super();
        this.state = {
            data: ''
        }
    }
    add(){
        this.props.dispatch({'type':'ADD','data':Number(this.state.data)})
        this.setState({
            data:''
        })

    }
    jian(){
        this.props.dispatch({'type':'JIAN','data':Number(this.state.data)})
        this.setState({
            data:''
        })
    }
    render(){
        
        return (
            <View style={{flex:1,flexDirection:'row',padding:20}}>
                <TextInput ref='inputText' onChangeText={(text) => this.setState({data:text})} value={this.state.data} placeholder="请输入" style={{width:100,height:40,borderWidth:1,borderColor:'#999',marginRight:10}}/>
                <Text style={{fontSize:16,fontWeight:'bold',lineHeight:40}}>{this.props.a}</Text>
                <TouchableOpacity onPress={() => this.add()} style={{marginRight:10,marginLeft:10,width:40,height:40,backgroundColor:'skyblue',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:14,lineHeight:40}}> + </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.jian()} style={{width:40,height:40,backgroundColor:'skyblue',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:14,lineHeight:40}}> - </Text>
                </TouchableOpacity>
                <Text onPress={() => {this.props.navigation.navigate('TodoList',{data:this.props.a})}} style={{width:100,height:40,backgroundColor:'yellow',color:'#000',textAlign:'center',lineHeight:40}}>去到TODOList</Text>
            </View>
        )
    }
}

export default connect(
    ({a}) => ({
        a
    })
)(App)


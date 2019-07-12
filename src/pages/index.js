import Counter from './Counter';
import TodoList from './todoList';
import Movie from "../pages/movie";
import Book from "../pages/book";
// export default Counter;


import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from "react-redux"
// 路由
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation"


// import {TabNav} from "../router/index";

const TabNav = createBottomTabNavigator(
  {
    Movie:{screen : Movie},
    Book:{screen: Book}
  },
  {
    initialRouteName: 'Book',
    // headerMode: 'none'
  }
)
// alert(TabNav)

const AppNavigator = createStackNavigator(
    {
      TabNav:{screen: TabNav},
      Counter: { screen: Counter },
      TodoList:{screen : TodoList},
    },
    {
      headerMode: 'none'
    }
);


// const AppNavigator = createBottomTabNavigator(
//     {
//       计数器: { screen: Counter },
//       TodoList:{screen : TodoList},
//     }
// );
const AppContainer = createAppContainer(AppNavigator);


// const MyTab = createBottomTabNavigator({
//   Movie: {screen: Movie},
//   Book: {screen: Book},

// });
// const rn = createStackNavigator({
//   MyTab: {screen: MyTab},
//   Counter: {screen: Counter},
//   TodoList: {screen: TodoList},
// });
// export default rn;

// const AppContainer = createAppContainer(rn);
export default class App extends React.Component {
    // static navigationOptions = {
    //     title: '计数器',
    //     headerStyle: {
    //       backgroundColor: 'red',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }
    render() {
      return <AppContainer />;
    }
  }
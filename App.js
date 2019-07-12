/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class HomePage extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>我是首页</Text>
        <Button
          title="Go to ContentPage"
          onPress={() => this.props.navigation.navigate('Content')}
        />
      </View>
    );
  }
}

class ContentPage extends Component<Props> {
  static navigationOptions = {
    title: 'Content',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>详情页</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createBottomTabNavigator(
  { 
    Home: HomePage,
    Content:ContentPage
  },
  {
    initialRouteName: "Home"
  }

); 

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

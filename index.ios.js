import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Home from './pages/home'



export default class TestNativeReact extends Component {
  render() {
    return (

      <View>
        <StatusBar hidden={true} />
        <Home />
      </View>

    );
  }
}


AppRegistry.registerComponent('TestNativeReact', () => TestNativeReact);

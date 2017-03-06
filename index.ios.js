import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './pages/home'



export default class TestNativeReact extends Component {
  render() {
    return (

      <View>
        <Home />
      </View>

    );
  }
}


AppRegistry.registerComponent('TestNativeReact', () => TestNativeReact);

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
// import PullToRefresh from '../components/pullRefresh';
import TicketTop from '../components/ticketTop';
import TicketMiddle from '../components/ticketMiddle';
import Clock from '../components/clock';
import FlashingBar from '../components/flashingBar';
import BottomBar from '../components/bottomBar';
import FlashBox from '../components/flashBox';

var styles = StyleSheet.create({
});

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TicketTop />
        <TicketMiddle />
        <Clock />
        <FlashingBar />
        <BottomBar />
        <FlashBox />
      </View>
    );
  }
}

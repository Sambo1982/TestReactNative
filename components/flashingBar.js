import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	AsyncStorage,
  TouchableHighlight,
  Modal,
  Button
} from "react-native";

import KeepAwake from "react-native-keep-awake";
import moment from "moment";

const styles = StyleSheet.create({
	container: {
		flex: -1,
		flexDirection: 'row',
		alignItems: 'stretch',
		padding: 2,
		marginTop: 5,
	},
	colorBar: {
		height: 25,
		flex: 1,
	},
	middle: {
		backgroundColor: 'blue',
	},
	right: {
		backgroundColor: 'black',
	},
	blank: {
		backgroundColor: 'white',
	}
});

var LEFT_COLOR = '@Colors:left_color';
var MIDDLE_COLOR = '@Colors:middle_color';
var RIGHT_COLOR = '@Colors:right_color';

export default class FlashingBar extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	showBox: true,
    	leftColor: 'orange',
    	middleColor: 'black',
    	rightColor: 'red'
    };

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showBox: !this.state.showBox });
    }, 500);
  }

  componentWillMount() {
    this._loadInitialBarColors().done();
  }

  // componentDidUpdate() {
  //   this._loadInitialBarColors().done();
  // }


  _loadInitialBarColors = async () => {
  	this._loadLeftBarColor().done();
  	this._loadMiddleBarColor().done();
  	this._loadRightBarColor().done();
  }

  _loadLeftBarColor = async () => {
    try {
      var value = await AsyncStorage.getItem(LEFT_COLOR);
      if (value !== null){
        this.setState({leftColor: value});
      } else {
        await AsyncStorage.setItem('@Colors:left_color', 'orange');
        var value = await AsyncStorage.getItem(LEFT_COLOR);
        this.setState({leftColor: value});
      }
    } catch (error) {
      console.warn("Error on setting leftColor");
    }
  }

  _loadMiddleBarColor = async () => {
    try {
      var value = await AsyncStorage.getItem(MIDDLE_COLOR);
      if (value !== null){
        this.setState({middleColor: value});
      } else {
        await AsyncStorage.setItem('@Colors:middle_color', 'black');
        var value = await AsyncStorage.getItem(MIDDLE_COLOR);
        this.setState({middleColor: value});
      }
    } catch (error) {
      console.warn("Error on setting middleColor");
    }
  }

   _loadRightBarColor = async () => {
    try {
      var value = await AsyncStorage.getItem(RIGHT_COLOR);
      if (value !== null){
        this.setState({rightColor: value});
      } else {
        await AsyncStorage.setItem('@Colors:right_color', 'red');
        var value = await AsyncStorage.getItem(RIGHT_COLOR);
        this.setState({rightColor: value});
      }
    } catch (error) {
      console.warn("Error on setting rightColor");
    }
  }

	render() {

		if (this.state.showBox == true) {
			return (
			<View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'}}>
				<View style={styles.container}>
					<View style={[styles.colorBar, {backgroundColor: this.state.leftColor}]} />
					<View style={[styles.colorBar, {backgroundColor: this.state.middleColor}]} />
					<View style={[styles.colorBar, {backgroundColor: this.state.rightColor}]} />
				</View>
			</View>
			)
		} else {
			return (
				<View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'}}>
					<View style={styles.container}>
						<View style={[styles.colorBar, styles.blank]} />
					</View>
				</View>
			)
		}

	}
}
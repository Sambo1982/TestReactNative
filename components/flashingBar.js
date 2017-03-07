import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	AsyncStorage
} from "react-native";

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
    	leftColor: 'orange',
    	middleColor: 'black',
    	rightColor: 'red'
    };
  }

  componentDidMount() {
    this._loadInitialBarColors().done();
  }

  reload() {
  	console.warn('blah')
  }

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
        this.setState({leftColor: 'orange'});
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
        this.setState({leftColor: 'orange'});
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
        this.setState({leftColor: 'orange'});
      }
    } catch (error) {
      console.warn("Error on setting rightColor");
    }
  }

	render() {
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
	}
}
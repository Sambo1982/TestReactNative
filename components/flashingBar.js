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
	}
});

var LEFT_COLOR = '@Colors:left_color';
var MIDDLE_COLOR = '@Colors:middle_color';
var RIGHT_COLOR = '@Colors:right_color';


export class ColorBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'orange',
    };
  }

  componentWillMount() {
    this._loadInitialBarColor().done();
  }

  componentWillUpdate() {
    this._loadInitialBarColor().done();
  }

  _loadInitialBarColor = async () => {
    if(this.props.barPostition == 'left') {
      bar = LEFT_COLOR;
      value = await AsyncStorage.getItem(bar);
      this.setState({backgroundColor: value})
    } else if(this.props.barPostition == 'middle') {
      bar = MIDDLE_COLOR;
      value = await AsyncStorage.getItem(bar);
      this.setState({backgroundColor: value})
    } else {
      bar = RIGHT_COLOR;
      value = await AsyncStorage.getItem(bar);
      this.setState({backgroundColor: value})
    }
  }

  render() {
    return (
      <View style={[styles.colorBar, {backgroundColor: this.state.backgroundColor}]} />
    )
  }

}


export default class FlashingBar extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	leftColor: 'orange',
    	middleColor: 'black',
    	rightColor: 'red'
    };
  }

	render() {
		return (
			<View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'}}>
				<View style={styles.container}>
					<ColorBar barPostition='left'  />
					<ColorBar barPostition='middle' />
					<ColorBar barPostition='right' />
				</View>
			</View>
		)
	}
}
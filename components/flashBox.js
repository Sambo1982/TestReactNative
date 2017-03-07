import React, {Component} from "react";
import {
	View,
	StyleSheet
} from "react-native";

import KeepAwake from "react-native-keep-awake";
import moment from "moment";

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
    bottom: 30,
		flexDirection: 'row',
		alignItems: 'stretch',
		padding: 2,
		marginTop: 5,
	},
	blinkBar: {
    backgroundColor: 'white',
		height: 30,
		flex: 1
	}
});

export default class FlashingBar extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	showBox: false
    };

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showBox: !this.state.showBox });
    }, 500);
  }

	render() {

		if (this.state.showBox == true) {
			return (
				<View style={styles.container}>
					<View style={[styles.blinkBar]} />
				</View>
			)
		} else {
			return (
				<View>
				</View>
			)
		}

	}
}
import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
} from "react-native";

import KeepAwake from "react-native-keep-awake";
import moment from "moment";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	timeText: {
		fontSize: 17,
		fontWeight: '600',
		marginLeft: -10,
	},
})


export default class Clock extends Component {
	componentDidMount() {
    this.endTime = moment().add(2, 'hours');

	}
	constructor(props) {
		super(props);
		this.state = {
			time: '',
		};
	}

	render() {
		setTimeout(() => {
			var diffTime = this.endTime - moment();
			var days = this.endTime.diff(moment(), 'days');
      var hoursToSeconds = moment.utc(diffTime).format('HH:mm:ss');
      var combined = '0' + days + ':' + hoursToSeconds;
			this.setState({
				time: combined
			});
		}, 1000);

		return (
			<View style={styles.container}>
				<StatusBar style={{backgroundColor: 'transparent'}} />
				<Text style={styles.timeText}>
					Expires in {this.state.time}
				</Text>

				<KeepAwake />
			</View>
		)
	}
}
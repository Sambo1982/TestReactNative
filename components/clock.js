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
		fontSize: 24,
		fontWeight: '700',
		marginBottom: 5
	},
	dateText: {
		fontSize: 24,
		fontWeight: '700'
	}
})

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: moment().format("LTS"),
			date: moment().format("dddd") + ", " + moment().format("ll")
		};
	}
	render() {
		setTimeout(() => {
			this.setState({
				time: moment().format("LTS"),
				date: moment().format("dddd") + ", " + moment().format("ll")
			});
		}, 1000);

		return (
		<View style={{flex: 0, marginTop: 110, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'}}>
			<View style={styles.container}>
				<StatusBar style={{backgroundColor: 'transparent'}} />
				<Text style={styles.timeText}>
					{this.state.time}
				</Text>
				<Text style={styles.dateText}>
					{this.state.date}
				</Text>

				<KeepAwake />
			</View>
		</View>
		)
	}
}
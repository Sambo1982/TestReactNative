import React, {Component} from "react";
import {
	View,
	StyleSheet,
	AsyncStorage,

} from "react-native";
import { ColorPicker } from 'react-native-color-picker';



const styles = StyleSheet.create({

});

export default class CustomColor extends Component {

	_onPressed = async (hexCode) => {
    this.setState({hexCode});
    try {
      await AsyncStorage.setItem(this.props.dbField, hexCode);
      alert(`Color selected: ${this.props.dbField} and ${hexCode}`)
    } catch (error) {
    	alert(error)
    }
  }

	render() {
		return (
			<View style={{height: 500, padding: 10}}>
			   <ColorPicker
			   	onColorSelected={color => this._onPressed(color)}
			    style={{flex: 1}}
			  />
			</View>
		)
	}

}
import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableHighlight,
	Modal
} from "react-native";
import ExpiresClock from './expiresClock';
import ColorPicker from './colorPicker';

const styles = StyleSheet.create({
	container: {
		flex: -1,
		flexDirection: 'row',
		padding: 2,
		marginTop: -5,
	},
	backText: {
		fontSize: 17,
    fontWeight: '500',
		color: '#4286f4',
		paddingLeft: 20,

	}
})


export default class BottomBar extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

	render() {

			return (
				<View>
					<View style={{marginTop: 22}}>
		        <Modal
		          animationType={"none"}
		          transparent={false}
		          visible={this.state.modalVisible}
		          >
		         <View style={{marginTop: 22}}>
		          <View>
		            <ColorPicker />

		            <TouchableHighlight onPress={() => {
		              this.setModalVisible(!this.state.modalVisible)
		            }}>
		              <Text>Hide Modal</Text>
		            </TouchableHighlight>

		          </View>
		         </View>
		        </Modal>
		      </View>

					<View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',
	        alignItems: 'center'}}>
						<View style={styles.container}>
							<TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
								<Text style={[styles.backText]}>Back</Text>
							</TouchableHighlight>
							<ExpiresClock />
						</View>
					</View>

				</View>
			)

	}
}
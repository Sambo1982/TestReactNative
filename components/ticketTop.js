import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  TouchableHighlight,
  Modal,
  Image,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ColorPicker from './colorPicker';
import FlashingBar from './flashingBar';

var styles = StyleSheet.create({
  destinationView: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginTop: 10,
    marginBottom: 0,
    flex: 1,
    height: 173
  },
  gradientBg: {
    position: 'absolute',
    height: 173,
    width: 375,
    resizeMode: 'cover',
  },
  largeText: {
    textAlign: 'center',
    padding: 0,
    fontSize: 42,
    letterSpacing: 2,
    backgroundColor: 'transparent',
    fontWeight: '600'
  },
  smallText: {
    position: 'absolute',
    top: 45,
    left: 20,
    padding: 0,
    fontSize: 16,
    backgroundColor: 'transparent',
    fontWeight: '500'
  }
});

var TOP_COLOR = '@Colors:top_color';

export default class TicketTop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      from: 'WHT HSE',
      topColor: '#f6bec9',
      to: 'NYP NYP',
      transferStation: 'NWK',
      transferLine: 'SEC',
      modalVisible: true
    };
  }

  componentDidMount() {
    this._loadInitialTopColor().done();
  }

  componentDidUpdate() {
    this._loadInitialTopColor().done();
  }


  _loadInitialTopColor = async () => {
    try {
      var value = await AsyncStorage.getItem(TOP_COLOR);
      if (value !== null){
        this.setState({topColor: value});
      } else {
        await AsyncStorage.setItem('@Colors:top_color', 'orange');
        var value = await AsyncStorage.getItem(TOP_COLOR);
        this.setState({topColor: value});
      }
    } catch (error) {
      console.warn("Error on setting topColor");
    }
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    return (
      <View>
        <View style={{flex: 0, flexDirection: 'row'}}>

          <View
            style={[styles.destinationView, {backgroundColor: this.state.topColor}]}>
            <Image
              style={styles.gradientBg}
              source={require('./img/gradient.png')}
            />
            <Text style={[styles.largeText]}>
              {this.state.from}
            </Text>
            <Text style={[styles.largeText]}>
              to
            </Text>
            <Text style={[styles.largeText]}>
              {this.state.to}
            </Text>
            <Text style={[styles.smallText]}>
              {this.state.transferStation}{"\n"}{this.state.transferLine}
            </Text>
          </View>
        </View>

        <View style={{position: 'absolute', bottom: 5}}>
          <TouchableHighlight onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}>
            <Text style={{color: 'white'}}>Top color</Text>
          </TouchableHighlight>
        </View>

        <View style={{marginTop: 22}}>
          <Modal
            animationType={"none"}
            transparent={false}
            visible={this.state.modalVisible}
            >
           <View style={{marginTop: 22, padding: 25}}>
            <View>
              <ColorPicker />

              <View style={{marginTop: 22}}>
                <Button
                  onPress={() => { this.setModalVisible(!this.state.modalVisible) } }
                  title="Close"
                  color="#841584"
                />
              </View>
            </View>
           </View>
          </Modal>
        </View>

      </View>
    );
  }
}

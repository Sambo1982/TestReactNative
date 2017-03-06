import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Modal,
  Button
} from 'react-native';

var styles = StyleSheet.create({
  ticketTypeView: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    height: 175,
    padding: 10,
    margin: 5,
    flex: 1
  },
  qrCodeView: {
    height: 175,
    padding: 0,
    margin: 5,
    marginLeft: 0,
    flex: 1
  },
  ticketTypeText: {
    marginTop: 7,
    fontSize: 22,
    fontWeight: '700'
  },
  ticketAmountText: {
    marginTop: 10,
    fontSize: 27,
    fontWeight: '700'
  },
  qrImageSmall: {
    width: 170,
    height: 175,
  },
  qrImageLarge: {
    width: 340,
    height: 346,
  },
  tapToEnlarge: {
    fontSize: 14,
    paddingRight: 40,

  },
});

export default class TicketMiddle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (

      <View>

        <View style={{flex: -1, flexDirection: 'row', alignItems: 'stretch', marginTop: -20}}>

          <View style={[styles.ticketTypeView]}>
            <Text style={[styles.ticketTypeText]}>
              One Way
            </Text>
            <Text style={[styles.ticketAmountText]}>
              1 Adult
            </Text>
          </View>

          <View style={[styles.qrCodeView]}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}
            >
              <Image
                style={styles.qrImageSmall}
                source={require('./img/qr.png')}
              />
          </TouchableHighlight>
          </View>

        </View>

        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={[styles.tapToEnlarge]}>
            Tap to enlarge
          </Text>
        </View>

        <View style={{marginTop: 22}}>
          <Modal
            animationType={"none"}
            transparent={false}
            visible={this.state.modalVisible}
            >
          <View style={{
              marginTop: 32,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              >
                   <Image
                    style={styles.qrImageLarge}
                    source={require('./img/qr.png')}
                  />
              </TouchableHighlight>
           </View>
          </Modal>
        </View>

      </View>


    );
  }
}

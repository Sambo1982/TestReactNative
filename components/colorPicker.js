import React, {Component} from "react";
import {
  View,
  Text,
  PickerIOS,
  Picker,
  StyleSheet,
  AsyncStorage,
  TouchableHighlight,
  Modal,
  Button,
  ScrollView
} from "react-native";
import CustomColor from './customColor';

const Item = Picker.Item;

var styles = StyleSheet.create({
  color: {
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 40,
    width: 150,
    height: 20,
  },
  colorBox: {
    flex: 1,
    marginBottom: 5,
    alignItems: 'stretch'
  },
  colorButton: {

  },
  colorText: {
    fontSize: 14,
    padding: 10,
    textAlign: 'center'
  }
});

var PickerItemIOS = PickerIOS.Item;

var COLORS = {
  select: {
    hex: 'white'
  },
  purple_1: {
    hex: '#974999'
  },
  purple_2: {
    hex: '#a852aa'
  },
  purple_3: {
    hex: '#b262b4'
  },
  purple_4: {
    hex: '#bc73b8'
  },
  purple_5: {
    hex: '#c78fc9'
  },
  purple_6: {
    hex: '#e1c3e2'
  },
  violet_1: {
    hex: '#7f39d7'
  },
  dark_aqua: {
    hex: '#5a7894'
  },
  blue_1: {
    hex: '#0066ff'
  },
  blue_2: {
    hex: '#6c80fb'
  },
  blue_3: {
    hex: '#9999cc'
  },
  blue_4: {
    hex: '#99ccff'
  },
  dark_aqua: {
    hex: '#6896a8'
  },
  red_1: {
    hex: '#330000'
  },
  red: {
    hex: 'red'
  },
  copper_rose: {
    hex: '#996666'
  },
  light_orange: {
    hex: '#ffcc99'
  },
  dark_pink: {
    hex: '#cc0066'
  },
  pink_1: {
    hex: '#ff55a3'
  },
  pink_2: {
    hex: '#f9c0ca'
  },
  pink_3: {
    hex: '#fbb1e5'
  },
  yellow: {
    hex: '#ede02a'
  },
  dark_tan: {
    hex: '#91895f'
  },
  orange_buff: {
    hex: '#eeca6b'
  },
  grey: {
    hex: '#b7b3b4'
  },
  green_1: {
    hex: '#339933'
  },
  green_2: {
    hex: '#33cc99'
  },
  dark_lime: {
    hex: '#66cc66'
  },
  green_3: {
    hex: '#99cc99'
  },
  green_4: {
    hex: '#8de48e'
  },
};

export class PickList extends Component {
  state = {
    modalVisible: false
  };

  _onPressed = async (hexCode) => {
    this.setState({hexCode});
    try {
      await AsyncStorage.setItem(this.props.dbField, hexCode);
    } catch (error) {}
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22
          }}
        >
          {this.props.title}
        </Text>
        <View style={{padding: 20, marginBottom: 22, backgroundColor: this.state.hexCode}}>
          {Object.keys(COLORS).map((color) => (
            <View style={[styles.colorBox]} key={color}>
              <TouchableHighlight underlayColor={COLORS[color].hex} style={[styles.colorButton], {backgroundColor: COLORS[color].hex}} onPress={() => { this._onPressed(COLORS[color].hex) }}>
                <Text style={[styles.colorText]}>
                  {COLORS[color].hex}
                </Text>
              </TouchableHighlight>
            </View>
          ))}

          <View style={[styles.colorBox]}>
            <TouchableHighlight underlayColor='#cccccc' style={[styles.colorButton], {backgroundColor: '#cccccc'}} onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={[styles.colorText]}>
                Custom Color
              </Text>
            </TouchableHighlight>
          </View>
        </View>

          <View>
            <Modal
              animationType={"none"}
              transparent={false}
              visible={this.state.modalVisible}
              >
              <View>
                <CustomColor dbField={this.props.dbField} />
              </View>
              <View style={{marginTop: 22}}>
                <Button
                  onPress={() => { this.setModalVisible(!this.state.modalVisible) } }
                  title="Close"
                  color="#841584"
                />
              </View>
            </Modal>
          </View>


      </View>
    );
  }
}


export default class ColorPicker extends Component {
  render() {
    return (
      <ScrollView>
        <PickList title="Top Color" dbField="@Colors:top_color"  />
        <PickList title="Bottom-Left Color" dbField="@Colors:left_color"  />
        <PickList title="Bottom-Middle Color" dbField="@Colors:middle_color"  />
        <PickList title="Bottom-Right Color" dbField="@Colors:right_color"  />
      </ScrollView>
    );
  }
}

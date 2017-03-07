import React, {Component} from "react";
import {
  View,
  Text,
  PickerIOS,
  StyleSheet,
  AsyncStorage,
  ScrollView
} from "react-native";

var styles = StyleSheet.create({
  color: {
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 40,
    width: 150,
    height: 20,
  }
});

var PickerItemIOS = PickerIOS.Item;

var COLORS = {
  select: {
    hex: 'white'
  },
  purple: {
    hex: '#ba73bc'
  },
  blue: {
    hex: '#2275f9'
  },
  pink: {
    hex: '#f9c0ca'
  },
  red: {
    hex: 'red'
  },
  grey: {
    hex: '#b7b3b4'
  },
  green: {
    hex: '#279327'
  },
  yellow: {
    hex: '#ede02a'
  },
  dark_aqua: {
    hex: '#6896a8'
  },
  dark_tan: {
    hex: '#91895f'
  },
  dark_purple: {
    hex: '#6339a8'
  }
};

export class PickList extends Component {
  state = {
  };

  _onValueChange = async (selectedValue) => {
    this.setState({selectedValue});
    try {
      await AsyncStorage.setItem(this.props.dbField, selectedValue);
    } catch (error) {
    }
  };

  render() {
    var color = this.state.selectedValue;
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
        <View style={{marginBottom: 22}}>
          <PickerIOS
            selectedValue={color}
            onValueChange={this._onValueChange}>
            {Object.keys(COLORS).map((color) => (
              <PickerItemIOS
                key={color}
                value={COLORS[color].hex}
                label={color}
              />
            ))}
          </PickerIOS>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={[styles.color, {backgroundColor: this.state.selectedValue}]}></View>
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

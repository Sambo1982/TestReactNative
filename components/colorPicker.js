import React, {Component} from "react";
import {
  View,
  Text,
  PickerIOS,
  Picker,
  StyleSheet,
  AsyncStorage,
  ScrollView
} from "react-native";

const Item = Picker.Item;

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
  blue_1: {
    hex: '#223ff9'
  },
  blue_2: {
    hex: '#223ff9'
  },
  blue_3: {
    hex: '#6c80fb'
  },
  pink_1: {
    hex: '#ff55a3'
  },
  pink_2: {
    hex: '#f9c0ca'
  },
  orange_buff: {
    hex: '#eeca6b'
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
        <View style={{padding: 20, marginBottom: 22, backgroundColor: this.state.selectedValue}}>
          <Picker
            style={{backgroundColor: 'white'}}
            selectedValue={color}
            onValueChange={this._onValueChange}>
            {Object.keys(COLORS).map((color) => (
              <Item
                key={color}
                value={COLORS[color].hex}
                label={color}
                labelStyle={{backgroundColor: 'red'}}
              />
            ))}
          </Picker>
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

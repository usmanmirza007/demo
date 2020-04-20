import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';

class splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('./../images/logo.png')} style={{ marginTop: '30%', width: '50%', height: '50%', alignItems: 'center', justifyContent: 'center' }} />
        <Text style={{ color: 'black', fontSize: 22, marginBottom: '10%' }}>SignIn As</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('prentLogin') }} style={{ width: width(40), justifyContent: 'center', alignItems: 'center', height: height(12), backgroundColor: '#f7f2f2', marginHorizontal: width(2), borderRadius: 5, elevation: 5 }}>
            <Text style={{ color: 'black', fontSize: 22 }}>Parent</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default splash;

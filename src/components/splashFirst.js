import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export default class splash extends React.Component {
  constructor(props) {
    super(props);
    this.decisionToNavigate = this.decisionToNavigate.bind(this);
}

  componentDidMount() {
      
    setTimeout(() => {

        this.decisionToNavigate();

    }, 3000);
}

decisionToNavigate() {
    const {navigate} = this.props.navigation;
    AsyncStorage.getItem("userId").then((value) => {
        if (value) {
                const {navigate} = this.props.navigation;
                navigate("splash");
        }
        else {
            navigate("splash");
        }
    }).catch(function (err) {
        Alert.alert(err.toString())
    }).done();
}
  // componentDidMount() {

  //   setTimeout(() => { this.props.navigation.navigate('splash') }, 3000);

  // }

  render() {
    return (
      <ImageBackground source={require('./../images/logo.png')} style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      </ImageBackground>
    );
  }
}


import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';

export default class signUpParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      MiddleName: '',
      LastName: '',
      Number: '',
      loading: false
    };
  }

  onSignup(FirstName, MiddleName, LastName, Number, ) {
    try {
      if (this.state.FirstName === '') {
        alert("Please First Name");
        return;
      }
      else if (this.state.Number === '') {
        alert("Please enter Cell Phone");
        return;
      }
      else {
        this.setState({ loading: true })
        axios.post(`http://aajo.in/public/api/shopper_signup`,
          {
            "firstname": FirstName,
            "lastname": LastName,
            "email": MiddleName,
            "country_code": "92",
            "phonenumber": Number,
            "gender": "male",
            "dob": "1/5/2015",
            "location": "lahore",
          }
        )
          .then((response) => {
             console.log(response);
            if (response.data.success === "1") {
              console.log("data",response)
              this.setState({loading:false})
              this.props.navigation.navigate('prentLogin');
            }
            else {
              this.setState({loading:false});
              Alert.alert("Something Went wrong");
            }
          })
          // .catch(error => {
          //   this.setState({loading:false});
          //   Alert.alert("Login Id/Cell# already registered.");
          // })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <SpinnerScreen />
    }
    return (
      <TouchableOpacity
        style={styles.btnContinue}
        onPress={() => this.onSignup(this.state.FirstName, this.state.MiddleName,
          this.state.LastName, this.state.Number, this.state.AccountType)}>
        <Text style={styles.btnContinueText}>Register</Text>
      </TouchableOpacity>
    )
  };


  render() {

    return (
      <ScrollView style={styles.safeArea}>
      <View style={{ backgroundColor: '#000', height: '4%', }}></View>

            <Text style={[styles.Heading]}>Registration </Text>
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType={'default'}
              underlineColorAndroid="transparent"
              placeholder="Enter First Name"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ FirstName: text })}
              value={this.state.FirstName}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType={'default'}
              underlineColorAndroid="transparent"
              placeholder="Enter last Name"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ MiddleName: text })}
              value={this.state.MiddleName}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Enter email"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ LastName: text })}
              value={this.state.LastName}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Enter Cell No"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ Number: text })}
              value={this.state.Number}
            />

          {this.renderButton()}

          <TouchableOpacity
            style={[styles.btnLogin]}
            onPress={() => this.props.navigation.navigate('prentLogin')}>
            <Text style={styles.btnLoginText}>Sign In Instead ?</Text>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  Heading: {
    marginTop:30,
    fontSize: 25,
    textAlign: 'center',
    marginBottom:20
  },
  btnContinue: {
    marginHorizontal:15,
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#ff7500',
  },
  btnContinueText: {
    textAlign: 'center',
    width: '80%',
    fontSize: 16,
    color: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  InputField: {
    width: '90%',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ff7500',
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
    color: '#343434',
    textAlign: 'left',
  },
  btnLogin: {
    paddingVertical: 5,
    marginTop:30,
    marginBottom: 10
  },
  btnLoginText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
});

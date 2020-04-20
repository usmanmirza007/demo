

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import axios from 'axios';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { width, height, totalSize } from 'react-native-dimension';

// create a component
export default class homeParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio_props: [
                { label: 'Parent', value: 0 },
                { label: 'Children', value: 1 }
            ],
            responseData: [],
            UserId: '',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userId').then((id) => {
                axios.get(`https://pcportal.malangis.com/public/api/tasksdone/${id}`)
                    .then((response) => {
                        console.log(response.data.tasklist)
                        if (response.data.success === "1") {
                            this.setState({ responseData: response.data.tasklist })
                        }
                        console.log(this.state.responseData);
                    })
                    .catch((error) => {
                        Alert.alert("Please Check Your Internet Connection");
                    });
        })
    
    }

            renderRow = ({ item }) => {
                // console.log(item.englishName);
                return (
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('taskShowDetailParent',{
                        TaskId:item.id
                    }) }} style={{ height: 50, justifyContent: 'space-between', marginHorizontal: 25, borderRadius: 5, backgroundColor: '#651fff', marginTop: 15, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, color: '#fff', marginLeft: 15, marginTop: 16, fontWeight: 'bold' }}>{item.title}</Text>
                        <Text style={{ fontSize: 15, color: '#fff', marginRight: 15, marginTop: 16, fontWeight: 'bold' }}>{item.task_points}</Text>
                    </TouchableOpacity >
                )
            }
            render() {
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                        <ImageBackground source={require('./../images/bg4.png')} style={{ width: '100%', height: '100%', }}>

                            <View style={{ height: '10%', backgroundColor: '#8852ff', }}>
                                <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                    <View style={{ marginLeft: 20 }}>
                                        <Icon name='menu' color='#fff' size={35}
                                            onPress={
                                                () => this.props.navigation.openDrawer()
                                            } />
                                    </View>
                                    <View style={{ marginTop: 5, }}>
                                        <Text style={{ fontSize: 20, marginLeft: 50, fontWeight: 'bold', color: '#fff' }}>Parent DashBoard</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: '10%', backgroundColor: '#651fff', }}>
                                <View style={{ marginTop: 20, }}>
                                    <Text style={{ fontSize: 15, alignSelf: 'center', color: '#fff', fontWeight: 'bold' }}>Previous Tasks</Text>
                                </View>
                            </View>

                            <FlatList
                                // style={{ marginBottom:125 }}
                                showsHorizontalScrollIndicator={false}
                                data={this.state.responseData}
                                renderItem={this.renderRow}
                                keyExtractor={(item) => item.id}
                            />
                        </ImageBackground>
                    </View>
                );
            }
        }


//make this component available to the app

const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                // alignItems: 'center',
                // justifyContent: 'center',
            },
            input: {
                width: WIDTH - 100,
                height: 50,
                padding: 10,
                marginBottom: 10,

            },
        });
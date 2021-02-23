import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Header from './components/Hearder';
export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            TextHolder1: '',
            TextHolder2: 'Hello'
        }
    }
    getTextInputValue = () => {
        this.setState({ TextHolder2: this.state.TextHolder1 });
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <Header/>
                <View style={{alignItems: 'center', paddingHorizontal:35}}>
                <TextInput
                    style={styles.TextInputStyle}
                    onChangeText={(text) => this.setState({ TextHolder1: text })}
                    underlineColorAndroid="transparent"
                    placeholder="Enter URL to Generate QR Code"
                />
                <TouchableOpacity onPress={this.getTextInputValue} activeOpacity={0.7} style={styles.button} >
                    <Text style={styles.TextStyle}> Click Here To Generate QR Code </Text>
                </TouchableOpacity>
                <View style={{marginTop:45}}>
                <QRCode        
                    value={this.state.TextHolder2}
                    size={280}
                    />
                </View>             
                </View>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,     
    },
    TextInputStyle: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#F44336',
        textAlign: 'center'
    },
    button: {
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#009688',
        borderRadius: 7,
        marginBottom: 20
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    }
});
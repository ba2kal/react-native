import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet,} from 'react-native';

export default class Button extends Component {
    render(){
        return (
            <TouchableOpacity style={styles.mainButton}>
                <Text style={styles.title}>Start</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    mainButton: {
        width:'100%',
        height:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 15,
    }
})
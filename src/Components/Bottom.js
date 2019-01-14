import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Bottom extends Component {
    render() {
        return (
            <View style={styles._Bottom}>
                <Text>Bottom</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _Bottom: {
        flex: 1,
        backgroundColor:'red'
    }
});
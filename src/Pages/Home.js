import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";
import Bottom from "../Components/Bottom";

export default class Home extends Component {
    render() {
        return (
            <View style={styles._home}>
                <View style={styles.upperWrapper}>
                    <LeftSide/>
                    <RightSide/>
                </View>
                <View style={styles.downWrapper}>
                    <Bottom/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _home: {
        flex: 1,
    },
    upperWrapper:{
        flex: 3,
        flexDirection: 'row'
    },
    downWrapper:{
        flex:1,
    }
});